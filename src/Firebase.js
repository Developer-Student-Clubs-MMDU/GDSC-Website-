import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAKeDrHTGkMrXQWlUe6qSK4AO-0khcMgAE",
  authDomain: "gdsc-website-7e5d5.firebaseapp.com",
  projectId: "gdsc-website-7e5d5",
  storageBucket: "gdsc-website-7e5d5.appspot.com",
  messagingSenderId: "596510903135",
  appId: "1:596510903135:web:c0173722bbad597fd984ea",
  measurementId: "G-M0RF38W4ZY"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);