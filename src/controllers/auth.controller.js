// auth.controller.js

import authService from '../services/auth.service.js';

const login = async (req, res) => {
  const { email, password } = req.body || {};

  // Validar que se proporcionen email y password
  if (!email || !password) {
    return res.status(400).json({ message: 'Se requieren email y contraseña' });
  }

  // Verificar si el usuario existe y la contraseña es correcta
  const token = await authService.login({ email, password });
  if (token) {
    return res.status(200).json({ token });
  }

  // Si las credenciales son incorrectas, devolver un error
  return res.status(401).json({ message: 'Credenciales inválidas' });
}

export default { login }
