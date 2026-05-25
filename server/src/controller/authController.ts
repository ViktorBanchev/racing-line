import { Router, type Request, type Response } from "express";
import type { LoginPayload, RegisterPayload } from "../types/user.types.js";
import { loginUser, registerUser } from "../services/authService.js";
import { generateToken } from "../utils/auth.service.js";

const authController = Router();

authController.post('/register', async (req: Request, res: Response) => {
    const { username, email, password, confirmPassword, image }: RegisterPayload = req.body;

    if (confirmPassword !== password) {
        return res.status(400).json({ message: 'Password mismatch' });
    }

    try {
        const user = await registerUser({ username, email, password, image });
        const token = generateToken(user._id.toString())

        const userResponse = {
            _id: user.id,
            username: user.username,
            email: user.email,
            image: user.image,
            role: user.role
        }

        res.status(201).json({
            message: 'User registered',
            data: {
                user: userResponse,
                accessToken: token
            }
        })
    } catch (error: any) {
        res.status(400).json({
            message: error.message! || 'Error during register!'
        })
    }
})

authController.post('/login', async (req: Request, res: Response) => {
    const { email, password }: LoginPayload = req.body;

    try {
        const user = await loginUser({ email, password });
        const token = generateToken(user._id.toString());

        const userResponse = {
            _id: user.id,
            username: user.username,
            email: user.email,
            image: user.image,
            role: user.role
        }

        res.status(200).json({
            message: 'User logged in!',
            data: {
                accessToken: token,
                user: userResponse
            }
        })
    } catch (error: any) {
        res.status(400).json({
            message: error.message || 'Error during login!'
        })
    }
})

export default authController;