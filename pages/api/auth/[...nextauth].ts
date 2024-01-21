import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs"

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: { label: 'Email', type: 'text' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials): Promise<any> {

                try {
                    
                    if(credentials?.email === process.env.ADMIN_EMAIL && credentials?.password === process.env.ADMIN_PASSWORD) {
                        return {email: credentials?.email, role: "Adminstrator"}
                    }

                    await connectMongoDB();
                    const user = await User.findOne({ email: credentials?.email })

                    if (!user) return null

                    const password = credentials?.password ?? ""

                    const passwordsMatch = await bcrypt.compare(password, user.password);

                    if (!passwordsMatch) return null

                    return user

                } catch (e) {
                    console.log("Error: ", e)
                    return null
                }
            }
        })
    ],
    callbacks: {
        jwt: async ({ token, user, profile }: any) => {
            if (profile) {
                token.email = profile.email;
            } else if (user) {
                token.email = user.email;
            }
            return token;
        },
        session: async ({ session, token }: any) => {
            if (token) {
                session.user.email = token.email;
            }
            return session;
        },
    },
    jwt: {
        encryption: true,
    },
}


export default async function auth(req: any, res: any) {
    return await NextAuth(req, res, authOptions as any)
}
