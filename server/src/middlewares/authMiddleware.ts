import type { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken'
import User, { type IUser } from "../models/User.js";
import type { HydratedDocument } from "mongoose";

declare global {
    namespace Express {
        interface Request {
            user?: HydratedDocument<IUser>
        }
    }
}

export async function isAuth(req: Request, res: Response, next: NextFunction) {
    try {
        let token;

        if (req.headers.authorization && req.headers.authorization?.startsWith('Bearer')) {
            console.log('BEARER')
            token = req.headers.authorization.split(' ')[1];
        }
        console.log(token)

        if (!token) {
            return res.status(401).json({ message: 'Unauthorized! Please login.' });
        }

        const SECRET = process.env.JWT_SECRET || 'SECRET_KEY';
        const decoded = jwt.verify(token, SECRET) as { _id: string };

        const currentUser = await User.findById(decoded._id);
        if (!currentUser) {
            return res.status(401).json({ message: 'Invalid user!' });
        }
        req.user = currentUser;

        next()
    } catch (error) {
        res.status(401).json({
            message: 'Invalid token.'
        })
    }

}

export async function isAdmin(req: Request, res: Response, next: NextFunction) {
    if (req.user && req.user.role === 'admin') {
        next();
    } else {
        res.status(403).json({
            message: 'Forbidden access!'
        })
    }
}