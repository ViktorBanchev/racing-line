import type { HydratedDocument } from "mongoose";
import User, { type IUser } from "../models/User.js";
import type { LoginPayload, RegisterPayload } from "../types/user.types.js";
import bcrypt from 'bcrypt';

export async function registerUser(userData: Omit<RegisterPayload, 'confirmPassword'>): Promise<HydratedDocument<IUser>> {
    const user = await User.create(userData);
    return user;
}

export async function loginUser(userData: LoginPayload): Promise<HydratedDocument<IUser>> {
    const user = await User.findOne({email: userData.email});

    if (!user) {
        throw new Error("Email or password incorrect!");
    }

    if (!await bcrypt.compare(userData.password, user.password)) {
        throw new Error("Email or password incorrect!")
    }

    return user;
}