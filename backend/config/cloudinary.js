import {v2 as cloudinary } from 'cloudinary'
import dotenv from "dotenv";

dotenv.config();

const connectCloudinary = async () => {
    cloudinary.config({
    cloud_name : process.env.CLOUDINARY_NAME,
    api_key : process.env.CLOUDINARY_API_KEY,
    api_secret :process.env.CLOUDINARY_API_SECRET,
    });

    // log config without exposing secret
    // console.log("✅ Cloudinary Connected with:");
    // console.log("   Cloud Name:", process.env.CLOUDINARY_NAME);
    // console.log("   API Key   :", process.env.CLOUDINARY_API_KEY);
    // console.log("   API Secret:", process.env.CLOUDINARY_API_SECRET ? "Loaded ✅" : "Missing ❌");
}

export default connectCloudinary
