import mongoose, { Schema, models } from "mongoose";

const rideSchema = new Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true }, 
    phonenumber: { type: String, required: true }, 
    address: { type: String, required: true }, 
    from: { type: String, required: true },
    to: {type: String, required: true },
    date: {type: String, required: true },
    time: {type: String, required: true },
    price: {type: String, required: true },
    message: {type: String, required: true },
    status: {type: String, required: true },
    userId: {type: String, required: false }
}, {timestamps: true})

const Ride = models.Ride || mongoose.model("Ride", rideSchema);

export default Ride