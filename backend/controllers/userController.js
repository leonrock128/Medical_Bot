// create API logic for create login,register,get profile,update profile,book appointment,get appointments,cancel appointments,Payment Gateway
import validator from 'validator'
import bcrypt from 'bcrypt'
import userModel from '../models/userModel.js'
import doctorModel from '../models/doctorModel.js'
import jwt from 'jsonwebtoken'
import {v2 as cloudinary} from 'cloudinary'
import appointmentModel from '../models/appointmentModel.js'

// API to register a user
const registerUser = async (req,res) => {

    try{

        const {name,email,password} = req.body

        if(!name || !email || !password) {
            return res.json({success:false,message:"Missing Details"})
        }

        // validating email
        if(!validator.isEmail(email)) {
            return res.json({success:false,message:"Invalid Email"})
        }

        // validating strong password
        if(password.length < 8) {
            return res.json({success:false,message:"Password must be at least 8 characters"})
        }

        // Hashing user pasword
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)

        const userData = {
            name,
            email,
            password:hashedPassword
        }

        const newUser = new userModel(userData)
        const user = await newUser.save()
        
        const token = jwt.sign({id:user._id},process.env.JWT_SECRET)

        res.json({success:true,token})

    } catch(error) {
        console.log(error);
        res.json({success:false,message:error.message})
    }
}

// API for user login
const loginUser = async (req,res) => {
    try {
        const {email,password} = req.body
        const user = await userModel.findOne({email})

        if(!user) {
            return res.json({success:false,message:'User does not exist'})
        }

        const isMatch = await bcrypt.compare(password,user.password)

        if(isMatch) {
            const token = jwt.sign({id:user._id},process.env.JWT_SECRET)
            res.json({success:true,token})
        } else {
            res.json({success:false,message:'Invalid Credentials'})
        }
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}

// API to get user profile data
const getProfile = async (req,res) => {
    try {

        // const { userId } = req.body;

        // if (!userId) {
        //     return res.status(400).json({ success: false, message: 'userId is required' });
        // }
        
        const userData = await userModel.findById(req.userId).select('-password')
        if (!userData) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }
        res.status(200).json({success:true,userData})

    } catch(error) {
        console.log(error);
        res.status(500).json({success:false,message:error.message})
    }
}

// API to update user profile
const updateProfile = async (req,res) => {
    try {

        const { name, phone,address, dob, gender} = req.body
        const imageFile = req.file

        if(!name || !phone || !dob || !gender) {
            return res.json({success:false,message:"Data Missing Details"})
        }
        // Parse address safely
        let parsedAddress = {};
        try {
            parsedAddress = JSON.parse(address);
        } catch (err) {
            parsedAddress = address;
        }

        // await userModel.findByIdAndUpdate(userId,{name, phone, address:JSON.parse(address), dob, gender})

         const updateData = { name, phone, address: parsedAddress, dob, gender };


        if (imageFile) {
            // upload image to cloudinary
            const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type:'image'})
            // const imageUrl = imageUpload.secure_url
            updateData.image = imageUpload.secure_url;

            // await userModel.findByIdAndUpdate(req.userId, { image : imageUrl});
        }

        await userModel.findByIdAndUpdate(req.userId, updateData,{ new: true });

        res.json({success:true,message:"Profile Updated"})

    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
    }
}

// API to book appointment
const bookAppointment = async (req,res) => {
    try {

        const {docId,slotDate,slotTime} = req.body
        const userId = req.userId;

        const docData = await doctorModel.findById(docId).select('-password')
        if(!docData.available) {
            return res.json({success:false,message:'Doctor Not Available'})
        }

        let slots_booked = docData.slots_booked

        // check for slot availability
        if (slots_booked[slotDate]) {
            if (slots_booked[slotDate].includes(slotTime)) {
                return res.json({ success: false, message: 'Slot Not Available' });
            } else {
                slots_booked[slotDate].push(slotTime);
            }
        } else {
            slots_booked[slotDate] = [];
            slots_booked[slotDate].push(slotTime);
        }

        const userData = await userModel.findById(userId).select('-password')

        delete docData.slots_booked

        const appointmentData = {
            userId,
            docId,
            userData,
            docData,
            amount: docData.fees,
            slotTime,
            slotDate,
            date: Date.now()
        }

        const newAppointment = new appointmentModel(appointmentData)
        await newAppointment.save()

        // save new slots data in docData
        await doctorModel.findByIdAndUpdate(docId,{slots_booked})

        res.json({success:true,message:'Appointment Booked Successfully'})

        

    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
    }
}

// API to get user appointments for frontend my-appointments page
const listAppointment = async (req,res) => {
    try {

        const userId = req.userId;
        const appointments = await appointmentModel.find({userId})

        res.json({success:true,appointments})

    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
    }
}

// API to cancel appointment
const cancelAppointment = async (req,res) => {
    try {

        const {appointmentId} = req.body
        const userId = req.userId;

        const appointmentData = await appointmentModel.findById(appointmentId)

        // verify appointment belongs to user
        if(appointmentData.userId !== userId) {
            return res.json({success:false,message:'Unauthorized Action'})
        }

        await appointmentModel.findByIdAndUpdate(appointmentId,{cancelled:true})

        // release doctor slot
        const {docId,slotDate,slotTime} = appointmentData

        const doctorData = await doctorModel.findById(docId)
        let slots_booked = doctorData.slots_booked

        slots_booked[slotDate] = slots_booked[slotDate].filter(slot => slot !== slotTime)

        await doctorModel.findByIdAndUpdate(docId,{slots_booked})

        res.json({success:true,message:'Appointment Cancelled Successfully'})

    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
    }
}

export {registerUser, loginUser, getProfile, updateProfile, bookAppointment, listAppointment, cancelAppointment}