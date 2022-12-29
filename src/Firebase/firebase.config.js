import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyAW-Zpm-sx0r5hiccopx7iz2aUIO2USaM0",
  authDomain: "go-productive.firebaseapp.com",
  projectId: "go-productive",
  storageBucket: "go-productive.appspot.com",
  messagingSenderId: "880243078807",
  appId: "1:880243078807:web:3145c1cf83849183515bd2",
  measurementId: "G-MBQQN0E2M7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
