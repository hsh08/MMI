import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdsuqkVt5PlemwAEN5jGRgwdYwg0IPR34",
  authDomain: "test1-2ff67.firebaseapp.com",
  projectId: "test1-2ff67",
  storageBucket: "test1-2ff67.appspot.com",
  messagingSenderId: "740308211820",
  appId: "1:740308211820:web:bb88be4da8139eb1f2a049"
};

// Initialize Firebase
export const MBTISNSapp = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(MBTISNSapp);