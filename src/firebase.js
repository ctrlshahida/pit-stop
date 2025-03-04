import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDivxIxlBweZfrsk9iy0dNxUSMWH8_etBg",
    authDomain: "pit-stop-application.firebaseapp.com",
    projectId: "pit-stop-application",
    storageBucket: "pit-stop-application.firebasestorage.app",
    messagingSenderId: "909387109385",
    appId: "1:909387109385:web:af989d6cfdce37fa3954d8",
    measurementId: "G-BYDBY1D43S"
    };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };