import mongoose, { Schema } from "mongoose";
import validator from "validator";

const userSchema = new Schema(
    {
        fullName:{
            type: String,
            required: true,
            trim: true,
            index: true,
        },
        email:{
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            validate: {
                validator: (value) => {
                    return validator.isEmail(value);
                },
                message: "Please enter a valid email",
            },
        },
        password:{
            type: String,
            required: [true, "Password is required"],
            select: false,
            min: [8, "Password must be at least 8 characters long"],
        },
    }
);

export const User = mongoose.model("User", userSchema)