// data.js

import { envs } from '../config/envs.js';
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const {firebaseConfig} = envs;

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };
