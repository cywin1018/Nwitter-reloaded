// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyAYIfhj4eNVddfU7NfbyyoGA8H_zVylwB4",
  authDomain: "nwitter-reloaded-5e3c2.firebaseapp.com",
  projectId: "nwitter-reloaded-5e3c2",
  storageBucket: "nwitter-reloaded-5e3c2.appspot.com",
  messagingSenderId: "264141567679",
  appId: "1:264141567679:web:8d3de7b4af0f421b7a780a"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage(app);

export const db = getFirestore(app);