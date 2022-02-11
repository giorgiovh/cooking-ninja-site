import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDZbECjh9TgDmCyg5feNyUIeK0mv7DwFTY",
    authDomain: "cooking-ninja-site-90081.firebaseapp.com",
    projectId: "cooking-ninja-site-90081",
    storageBucket: "cooking-ninja-site-90081.appspot.com",
    messagingSenderId: "51211566720",
    appId: "1:51211566720:web:f98437a944d274a23c3065"
  };

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()

export { projectFirestore }