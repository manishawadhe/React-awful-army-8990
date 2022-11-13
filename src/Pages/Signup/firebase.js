import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseApp = initializeApp({
  apiKey: "AIzaSyBBbnyump3QolW2w38lJWMy8sxHkFDjkak",
  authDomain: "otp-auth-tripvillas.firebaseapp.com",
  projectId: "otp-auth-tripvillas",
  storageBucket: "otp-auth-tripvillas.appspot.com",
  messagingSenderId: "414923381919",
  appId: "1:414923381919:web:87f80e7757ed3c47f0d6aa"
});

// Initialize Firebase
const auth = getAuth(firebaseApp);
const db= getFirestore(firebaseApp)

export default db