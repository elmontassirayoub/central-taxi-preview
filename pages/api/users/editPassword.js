import { NextApiRequest, NextApiResponse } from "next"
import { getSession } from "./editProfile"
import { connectMongoDB } from "@/lib/mongodb"
import User from "@/models/user"
import bcrypt from "bcryptjs"

export default async function handler(req, res) {
    const session = await getSession({ req, res })

    if (!session?.user?.email) {
        return res.status(401).json({ message: "You need to be logged in" })
    }

    await connectMongoDB()

    if (req.method === "PUT") {
        const user = await User.findOne({ email: session.user.email })

        const passwordsMatch = await bcrypt.compare(req.body.oldPassword, user.password);

        if (!passwordsMatch) return res.status(400).json({message: "Ancien mot de passe incorrect"})

        const hashedPassword = await bcrypt.hash(req.body.newPassword, 10)

        await User.updateOne({email: session.user.email}, {password: hashedPassword});
        return res.status(201).json({message: "success"})

    }

}