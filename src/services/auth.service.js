// auth.service.js

import authModel from '../models/auth.model.js';
import { generateToken } from '../auth/jwt.js';

const login = async (user) => {
    // Validar que el usuario existe y es valido
    const userValid = await authModel.validateUser(user);
    if (userValid) {
        // Generar un token para el usuario
        const token = generateToken({ userValid });
        return token;
    }
    // Si el usuario no es válido, devolver null
    return null;
}

export default {
    login
};
