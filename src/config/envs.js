// envs.js

import 'dotenv/config';

export const envs = {
    PORT: process.env.PORT || 5000,

    firebaseConfig: {
        apiKey: process.env.FIREBASE_API_KEY,
        authDomain: process.env.FIREBASE_AUTH_DOMAIN,
        projectId: process.env.FIREBASE_PROJECT_ID,
        storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.FIREBASE_APP_ID
    },

    jwt: {
        secretKey: process.env.JWT_SECRET_KEY,
        expiresIn: process.env.JWT_EXPIRES_IN || '1h'
    }
};
