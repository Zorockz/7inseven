import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCChi0l5ugHn8q83GfrC1dY4Sihn2HwHUA",
  authDomain: "forfutureme-55cd2.firebaseapp.com",
  projectId: "forfutureme-55cd2",
  storageBucket: "forfutureme-55cd2.firebasestorage.app",
  messagingSenderId: "822297739285",
  appId: "1:822297739285:web:bcc265c9c349d118a24e1c",
  measurementId: "G-WKNWXRY24T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

// Initialize Auth
export const auth = getAuth(app);

export default app; 