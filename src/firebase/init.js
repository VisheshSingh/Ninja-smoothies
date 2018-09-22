import firebase from "firebase";
//import firestore from 'firebase/firestore'
// Initialize Firebase
var config = {
  apiKey: "AIzaSyAvR3oD12VV9dZezdVxxaLUnUkzUse2jpQ",
  authDomain: "ninja-smoothies-819e0.firebaseapp.com",
  databaseURL: "https://ninja-smoothies-819e0.firebaseio.com",
  projectId: "ninja-smoothies-819e0",
  storageBucket: "ninja-smoothies-819e0.appspot.com",
  messagingSenderId: "935381948722"
};
const firebaseApp = firebase.initializeApp(config);

//exprt firestore database
export default firebaseApp.firestore();
