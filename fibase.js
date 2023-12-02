// firebase.js
import firebase from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import 'firebase/firestore'
import { initializeApp } from 'firebase/app'
const firebaseConfig = {
  // apiKey: process.env.YOUR_API_KEY,
  // authDomain: process.env.YOUR_AUTH_DOMAIN,
  // projectId: process.env.YOUR_PROJECT_ID,
  // storageBucket: process.env.YOUR_STORAGE_BUCKET,
  // messagingSenderId: process.env.YOUR_MESSAGING_SENDER_ID,
  // appId: process.env.YOUR_APP_ID,
  apiKey: 'AIzaSyDpfFrODuI_vCZNLvfgJQUJbqj28HPo8E4',
  authDomain: 'tasq-1.firebaseapp.com',
  projectId: 'tasq-1',
  storageBucket: 'tasq-1.appspot.com',
  messagingSenderId: '690734504926',
  appId: '1:690734504926:web:461dd7c73c19badbb01b4f',
}

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig)
// }

// const firestore = firebase.firestore()

// export { firestore }
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
