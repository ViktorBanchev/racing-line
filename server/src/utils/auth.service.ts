import jwt from 'jsonwebtoken';

export function generateToken(userId: string) {
    const SECRET = process.env.JWT_SECRET || 'SECRET_KEY';

    return jwt.sign({ _id: userId}, SECRET, { expiresIn: '1d' })
}