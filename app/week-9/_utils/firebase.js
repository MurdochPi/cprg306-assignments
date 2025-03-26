// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
 
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC3V87iwSrLEND6VnASLVXspEzrrZzGEAI",
    authDomain: "cprg306-assignments-178f5.firebaseapp.com",
    projectId: "cprg306-assignments-178f5",
    storageBucket: "cprg306-assignments-178f5.firebasestorage.app",
    messagingSenderId: "280943060815",
    appId: "1:280943060815:web:97d7fef23b37eecc3a473a"
};
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);