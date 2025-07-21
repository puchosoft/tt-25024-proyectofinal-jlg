// authentication.js

import { verifyToken } from '../auth/jwt.js';

export const authentication = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Acceso denegado.' });
    }
    try {
        const decoded = verifyToken(token);
        req.user = decoded; // Guardar la información del usuario decodificada en el objeto de solicitud
        next(); // Continuar con la siguiente función de middleware

    } catch (error) {
        return res.status(403).json({ message: 'Token inválido.' });
    }
};
