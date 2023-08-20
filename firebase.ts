// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCpBI3T1wP5MBKMN96TMDLKGKTZ_RHpvCc",
    authDomain: "netflix-colne2.firebaseapp.com",
    projectId: "netflix-colne2",
    storageBucket: "netflix-colne2.appspot.com",
    messagingSenderId: "265082002407",
    appId: "1:265082002407:web:5a39c5491a6ac5c1cebb42"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }