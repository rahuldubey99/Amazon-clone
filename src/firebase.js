// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCTjpmN7LPXob43SX1JMZyVhn4TtA7X2Tc",
  authDomain: "e-challenge-2dbd2.firebaseapp.com",
  databaseURL: "https://e-challenge-2dbd2.firebaseio.com",
  projectId: "e-challenge-2dbd2",
  storageBucket: "e-challenge-2dbd2.appspot.com",
  messagingSenderId: "831064845828",
  appId: "1:831064845828:web:8c3e104c60b94866ddcf51",
  measurementId: "G-VPM317WHEZ"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };