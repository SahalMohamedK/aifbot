import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC0xC23WxNsD65gumFy4khH2GBm3z7oJg4",
    authDomain: "aifbot.firebaseapp.com",
    projectId: "aifbot",
    storageBucket: "aifbot.appspot.com",
    messagingSenderId: "1032377469099",
    appId: "1:1032377469099:web:7d78afe775b202e009cfee"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
