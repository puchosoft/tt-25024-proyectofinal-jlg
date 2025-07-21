// jwt.js

import jwt from 'jsonwebtoken';
import { envs } from '../config/envs.js';

const { secretKey, expiresIn } = envs.jwt;

export const generateToken = (userData) => {
    const user = { id: userData.id, email: userData.email };
    const expiration = { expiresIn };
    const token = jwt.sign(user, secretKey, expiration);
    return token;
}

export const verifyToken = (token) => {
    try {
        return jwt.verify(token, secretKey);
    } catch (error) {
        throw new Error('Token inválido');
    }
};
