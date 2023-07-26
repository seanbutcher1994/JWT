import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        lowercase: false
    },
    userName: {
        type: String,
        required: true,
        lowercase: false
    },
    userId: {
        type: String,
        required: true
    }
})

export const User = mongoose.model("Users", userSchema)