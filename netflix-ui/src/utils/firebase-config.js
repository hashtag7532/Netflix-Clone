import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyC0m-C9nL02gdDTRk4tFhFzFkuSgysyafs",
  authDomain: "react-netflix-clone-1fdda.firebaseapp.com",
  projectId: "react-netflix-clone-1fdda",
  storageBucket: "react-netflix-clone-1fdda.appspot.com",
  messagingSenderId: "276337745573",
  appId: "1:276337745573:web:d74652c4e2d1c0cf07f74c",
  measurementId: "G-HXVPSLYBYB"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app)