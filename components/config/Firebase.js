import firebase from 'firebase/app'
import 'firebase/auth'
// import { API_KEY, AUTH_DOMAIN, DATABASE_URL, PROJECT_ID, APP_ID, MESSAGE_SENDER_ID} from 'react-native-dotenv'

const app = firebase.initializeApp({
  apiKey: 'AIzaSyAldv6Emxn7e7HL9SyHMerXWEZG8Jaeb3I',
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
});
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
export const auth = app.auth()
export default app