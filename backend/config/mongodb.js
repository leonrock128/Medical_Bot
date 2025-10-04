import mongoose from "mongoose";

const connectDB = async () => {

    mongoose.connection.on('connected',() => console.log("Database Connected"))

    await mongoose.connect(`${process.env.MONGODB_URI}/HealthCare`)
}

export default connectDB


// mongoose.connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
// .then(() => console.log("✅ MongoDB Connected"))
// .catch(err => console.error("❌ MongoDB Connection Error:", err))

// // schema + model
// const userSchema = new mongoose.Schema({
//     name: String,
//     email: { type: String, unique: true },
//     password: String
// })
// const User = mongoose.model("User", userSchema)