import { getSession } from "../users/editProfile";
import Ride from "@/models/ride"
import { connectMongoDB } from "@/lib/mongodb";
import mongoose from "mongoose";

export default async function handler (req, res) {
    const session = await getSession({ req, res })

    if(session.user.email !== process.env.ADMIN_EMAIL) {
        return res.status(404).json({message: "T'as besoin d'etre un administrateur"})
    }


    /**
     * what we will have in the queries:
     * page: @number
     * filter: ["all", "pending", "confirmed", "cancelled"]
     * @returns rides and if there are more to come
     */

    await connectMongoDB()

    let filter = {}
    if(req.query.filter !== "all") filter.status = req.query.filter
    const pageSize = 10

    let rides = await Ride.find(filter).sort({createdAt: -1}).skip(parseInt(req.query.page) * pageSize).limit(pageSize)
    const allRides = await Ride.find(filter)

    if(req.query.id) {
        const {id} = req.query
        const isRideIncluded = rides.some(ride => ride.id.toString() === id)
        if(!isRideIncluded) {
            const ride = await Ride.findOne({_id: new mongoose.Types.ObjectId(id)})
            rides = [...rides.slice(0, 9), ride]
        }
    }

    const more = allRides.length > ((parseInt(req.query.page) * pageSize) + pageSize)

    return res.status(200).json({rides, more, length: allRides.length })

}