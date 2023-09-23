import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAvzrW3u8ynxz0B58Tv4HUoJ0cAIu9TWuY",
  authDomain: "nwitter-reloaded-9cd2d.firebaseapp.com",
  projectId: "nwitter-reloaded-9cd2d",
  storageBucket: "nwitter-reloaded-9cd2d.appspot.com",
  messagingSenderId: "544010856717",
  appId: "1:544010856717:web:654b55fddd5ce085556844"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);  