// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyDqNHmR39UckiqAWll8Jf2FjzGwbJHCpfI",

  authDomain: "pixelperfect-2b5c8.firebaseapp.com",

  projectId: "pixelperfect-2b5c8",

  storageBucket: "pixelperfect-2b5c8.appspot.com",

  messagingSenderId: "885232170276",

  appId: "1:885232170276:web:6f60db470c5a81009dafb1"

};




const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);