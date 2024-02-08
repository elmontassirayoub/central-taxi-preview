import { getSession } from "../users/editProfile";
import { connectMongoDB } from "@/lib/mongodb"
import Ride from "@/models/ride"
import sendMail from "@/utils/email"

export default async function handler(req, res) {
    const session = await getSession({ req, res })

    if(session.user.email !== process.env.ADMIN_EMAIL) {
        return res.status(404).json({message: "T'as besoin d'etre un administrateur"})
    }

    await connectMongoDB()

    const {_id, confirm} = req.body

    const ride = await Ride.findOne({_id})

    if(!ride) return res.status(404).json({message: "Cette reservation n'exist plus"})

    const status = confirm ? "confirmed" : "cancelled"

    await Ride.findOneAndUpdate({_id}, {status})
    await sendMail({to: ride.email, admin: false, confirmation: true, status, reservation: ride})

    return res.status(200).json({message: `Réservation a été ${status === "confirmed" ? "confirmée" : "annulée"}`})
}