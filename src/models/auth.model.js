// auth.model.js

const users = [
    { id: 1, email: 'user@dominio.com', password: '1234' },
    { id: 2, email: 'admin@dominio.com', password: '4321' }
];

const validateUser = async (user) => {
    // Simulate user validation
    const foundUser = users.find(u => u.email === user.email && u.password === user.password);
    return foundUser ? foundUser : null;
}

export default {
    validateUser
};
