import mongoose from "mongoose"

export const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI as string)
        console.log("connected to DB")
    } catch (e) {
        console.log("Error connecting to mongodb: ", e)
    }
}