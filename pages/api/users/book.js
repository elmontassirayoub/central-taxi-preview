import Ride from "@/models/ride"
import sendMail from "@/utils/email"
import { getSession } from "./editProfile"
import User from "@/models/user";
import { connectMongoDB } from "@/lib/mongodb"

export default async function handler(req, res) {

    const session = await getSession({ req, res })

    const rideInfo = {...req.body, status: "pending"}

    if (session?.user?.email) {
        const user = await User.findOne({email: session.user.email})
        rideInfo.userId = user._id
    }

    await connectMongoDB()

    const ride = await Ride.create(rideInfo)
    await sendMail({to: process.env.ADMIN_EMAIL, admin: true, confirmation: false, reservation: {date: ride.date, time: ride.time, from: ride.from, to: ride.to, _id: ride._id}})
    await sendMail({to: ride.email, admin: false, confirmation: false, reservation: {date: ride.date, time: ride.time, from: ride.from, to: ride.to, _id: ride._id}})
    return res.status(201).json({message: "success"})
}