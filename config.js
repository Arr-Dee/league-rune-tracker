import firebase from "firebase"
import "firebase/auth";

// Your web app's Firebase configuration

var firebaseConfig = {
  apiKey: "AIzaSyAteMfCx9WJyfihr7tBBjcc_TJBOnr9oig",
  authDomain: "league-rune-tracker.firebaseapp.com",
  databaseURL: "https://league-rune-tracker.firebaseio.com",
  projectId: "league-rune-tracker",
  storageBucket: "league-rune-tracker.appspot.com",
  messagingSenderId: "569378432491",
  appId: "1:569378432491:web:746001b90ccf6eaa4165ae",
  measurementId: "G-MQD2N0Q714"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;