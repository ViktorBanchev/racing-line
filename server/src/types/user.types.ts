import type { IUser } from "../models/User.js";

export type RegisterPayload = Pick<IUser, 'email' | 'username' | 'password' | 'image'> & {
    confirmPassword: string;
}

export type LoginPayload = Pick<IUser, 'email' | 'password'>