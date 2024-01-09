import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import { NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export const getSession = async (context) => {
    const session = await getServerSession(context.req, context.res, authOptions);
    return session;
};

export type updateUserData = {
    firstname: string,
    lastname: string,
    phonenumber: string, 
    address: string,
}



export default async function handler (req: Request & {body: updateUserData}, res: NextApiResponse) {
    const session = await getSession({req, res})


    if(!session?.user?.email) {
        return res.status(401).json({message: "You need to be logged in"})
    }

    await connectMongoDB()

    if(req.method === "PUT") {
        await User.updateOne({email: session.user.email}, {...req.body})
        return res.status(201).json({message: "success"})
    }
}