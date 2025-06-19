import { FirebaseOptions, initializeApp } from 'firebase/app'
import * as auth from 'firebase/auth'

const firebaseConfig: FirebaseOptions = {
    apiKey: "AIzaSyCoIbZp8V_uKFJIbKeCX946sCPcAf0a9vs",
    authDomain: "auth-react-josedev.firebaseapp.com",
    projectId: "auth-react-josedev",
    messagingSenderId: "240072014936",
    storageBucket: "auth-react-josedev.firebasestorage.app",
    appId: "1:240072014936:web:2838173473499afd9f1e2d"
};

export const appFirebase = initializeApp(firebaseConfig);
export const authFirebase = auth.initializeAuth(appFirebase);
