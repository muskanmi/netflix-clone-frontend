import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAyiE1VBC_1Xl2mm68RtKfotCnuv8fq1l4",
  authDomain: "react-netflix-clone-ebdcc.firebaseapp.com",
  projectId: "react-netflix-clone-ebdcc",
  storageBucket: "react-netflix-clone-ebdcc.appspot.com",
  messagingSenderId: "960152694382",
  appId: "1:960152694382:web:6ab8ce186511a168d5c07f",
  measurementId: "G-LV8Q4TVLDK"
};
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);