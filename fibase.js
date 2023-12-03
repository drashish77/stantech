// firebase.js
import firebase from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import 'firebase/firestore'
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_YOUR_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_YOUR_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_YOUR_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_YOUR_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_YOUR_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_YOUR_APP_ID,
}

// export { firestore }
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app)
