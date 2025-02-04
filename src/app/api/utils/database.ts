import mongoose from "mongoose";

let connected = false;

const connectDB = async () => {
    mongoose.set("strictQuery", true);

    if (connected) {
        console.log("Mongoose is already connected");
        return;
    }

    // Use server-side environment variable
    const MONGODB_URI = process.env.MONGODB_URI;
    
    if (!MONGODB_URI) {
        throw new Error("MONGODB_URI is missing in environment variables.");
    }

    try {
        await mongoose.connect(MONGODB_URI);
        connected = true;
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection error:", error);
    }
};

export default connectDB;
