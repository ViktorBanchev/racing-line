import { Schema, Types, model } from "mongoose";
import bcrypt from 'bcrypt'

export interface IUser {
    email: string;
    username: string;
    password: string;
    image: string;
    createdAt: Date;
    updatedAt: Date;
    role: 'user' | 'admin'
}

const userSchema = new Schema<IUser>({
    email: {
        type: String,
        require: true,
    },
    username: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    }
}, { timestamps: true });

userSchema.pre("save", async function () {
    const hashedPassword = await bcrypt.hash(this.password, 10);
    this.password = hashedPassword;
})

const User = model<IUser>('User', userSchema);
export default User;