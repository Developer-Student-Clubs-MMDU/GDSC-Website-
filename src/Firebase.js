import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "Enter Your Firebase Api Key",
  authDomain: "Enter Your AuthDomain",
  projectId: "Enter Your ProjectId",
  storageBucket: "Enter Your storageBucket",
  messagingSenderId: "Enter messagingSenderId",
  appId: "Enter Your appId",
  measurementId: "Enter measurementId"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);