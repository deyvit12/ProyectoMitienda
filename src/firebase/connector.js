// Import the functions you need from the SDKs you need
import { initializeApp, firestore } from "firebase/app";
import 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const app = initializeApp ( {
  apiKey: "AIzaSyAspkd9ac7LNdsgvgscrtCfugK2XJ2LHqE",
  authDomain: "productscoder.firebaseapp.com",
  projectId: "productscoder",
  storageBucket: "productscoder.appspot.com",
  messagingSenderId: "568839059629",
  appId: "1:568839059629:web:ad8a47fd92afbc8cef2e24"
});

// Initialize Firebase
export function getFirebaseApp(){
    return app
}

export function getFirestore(){
    return firestore(app)
}