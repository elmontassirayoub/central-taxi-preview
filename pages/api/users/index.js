import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import { getSession } from "./editProfile";


export default async function handler(req , res) {
    

    const session = await getSession({req, res})
    
    if(!session?.user?.email) {
        return res.status(401).json({message: "You need to be logged in"})
    }

    await connectMongoDB()

    if(req.method === "GET") {
        const user = await User.findOne({email: session.user.email})
        return res.status(200).json({firstname: user.firstname, lastname: user.lastname, phonenumber: user.phonenumber, address: user.address})
    }

}