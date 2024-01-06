import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import bcrypt from "bcryptjs"
import { NextApiResponse } from "next";

export type userDataType = {
    firstname: string,
    lastname: string,
    phonenumber: string,
    email: string,
    address: string,
    password: string
}

export default async function handler(req: Request & {body: userDataType}, res: NextApiResponse) {

    const userData = req.body;

    await connectMongoDB()

    const userAlreadyExist = await User.findOne({email: userData.email})
    if(userAlreadyExist) return res.status(404).json({message: "User already exists"})

    const hashedPassword = await bcrypt.hash(userData.password, 10)
    userData.password = hashedPassword
    await User.create(userData)

    return res.status(201).json({message: "User Created"})
}