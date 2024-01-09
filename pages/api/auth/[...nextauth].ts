import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs"

const authOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {},
            async authorize(credentials: { email: string, password: string }) {
                const { email, password } = credentials;

                try {
                    await connectMongoDB();
                    const user = await User.findOne({ email })

                    if (!user) return null

                    const passwordsMatch = await bcrypt.compare(password, user.password);

                    if (!passwordsMatch) return null

                    return user

                } catch (e) {
                    console.log("Error: ", e)
                }
            }
        })
    ],
    callbacks: {
        jwt: async ({ token, user, profile }) => {
            if (profile) {
                token.email = profile.email;
            } else if (user) {
                token.email = user.email;
            }
            return token;
        },
        session: async ({ session, token }) => {
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


export default async function auth(req, res) {
    return await NextAuth(req, res, authOptions)
}
