import express from 'express'
import { addDoctor,allDoctors,appointmentCancel,appointmentsAdmin,loginAdmin } from '../controllers/adminController.js'
import upload from '../middlewares/multer.js'
import authadmin from '../middlewares/authAdmin.js';
import { changeAvailability } from '../controllers/doctorController.js'
import authAdmin from '../middlewares/authAdmin.js';


const adminRouter = express.Router()

adminRouter.post('/add-doctor',authadmin,upload.single('image'),addDoctor);
adminRouter.post('/login',loginAdmin);
adminRouter.post('/all-doctors',authadmin,allDoctors);
adminRouter.post('/change-availability',authadmin,changeAvailability);
adminRouter.get('/appointments',authAdmin,appointmentsAdmin)
adminRouter.post('/cancel-appointment',authAdmin,appointmentCancel)


// adminRouter.post("/upload", upload.single("image"), uploadImage);

export default adminRouter