import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_KEY,
  apiKey: "AIzaSyAVeFTobbZ-1ztIDgfb2uhjOHUBgnFFnRA",
  authDomain: "soyo-1.firebaseapp.com",
  projectId: "soyo-1",
  storageBucket: "soyo-1.appspot.com",
  messagingSenderId: "8340279795",
  appId: "1:8340279795:web:4a787ed4eb8e3108664286",
  measurementId: "G-WL67YW36ZP"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app)

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app)