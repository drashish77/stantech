// firebase.js
import firebase from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import 'firebase/firestore'
import { initializeApp } from 'firebase/app'
const firebaseConfig = {
  apiKey: process.env.YOUR_API_KEY,
  authDomain: process.env.YOUR_AUTH_DOMAIN,
  projectId: process.env.YOUR_PROJECT_ID,
  storageBucket: process.env.YOUR_STORAGE_BUCKET,
  messagingSenderId: process.env.YOUR_MESSAGING_SENDER_ID,
  appId: process.env.YOUR_APP_ID,
  // apiKey: 'AIzaSyBmzddDiJ-AnGQWtab5v8effpgSiyxg4J4',
  // authDomain: 'tasqq-1bd53.firebaseapp.com',
  // projectId: 'tasqq-1bd53',
  // storageBucket: 'tasqq-1bd53.appspot.com',
  // messagingSenderId: '358993411240',
  // appId: '1:358993411240:web:84bd3b4240da5ac6ccd69d',
}

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig)
// }

// const firestore = firebase.firestore()

// export { firestore }
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
