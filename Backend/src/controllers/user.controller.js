import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";

dotenv.config();

export const signup = async (req,res)=>{
    try {
        const {fullName,email,password} = req.body;
        const user = await User.findOne({email})
        if(user){
            return res.status(400).json({message: "User already exists"})
        }

        const hashPassword = await bcrypt.hash(password, Number(process.env.SALT))
        const createUser = new User({
            fullName,
            email,
            password: hashPassword

        })
        await createUser.save().then((user)=> {
            res.status(201).json({message: "User Created successfully"})
        })
    } catch (error) {
        console.log("Error:" + error.message)
        res.status(500).json({message: "Internal server error"})
        
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: "Invalid username or password" });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: "Invalid username or password" });
        }

        res.status(200).json({
            message: "Login successful",
            user: {
                _id: user._id,
                fullName: user.fullName,
                email: user.email
            }
        });
    } catch (error) {
        console.log("Error:" + error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};
