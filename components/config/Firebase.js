import firebase from 'firebase'
// import {
//   API_KEY,
//   AUTH_DOMAIN,
//   PROJECT_ID,
//   MESSAGE_SENDER_ID,
//   APP_ID
// } from '@env'

const firebaseConfig = {
  apiKey: 'AIzaSyAldv6Emxn7e7HL9SyHMerXWEZG8Jaeb3I',
  authDomain: 'ride-the-duck.firebaseapp.com',
  projectId: 'ride-the-duck',
  storageBucket: '',
  messagingSenderId: '993586584474',
  appId: '1:993586584474:web:1520602159884f4b1fb823'
};

// Initialize Firebase
const Firebase = firebase.initializeApp(firebaseConfig)

export default Firebase