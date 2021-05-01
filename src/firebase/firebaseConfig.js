import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: "AIzaSyAmtBtZhvkhsETzArWfm5vUZNFSfN4qTSw",
  authDomain: "fruver-cdd40.firebaseapp.com",
  projectId: "fruver-cdd40",
  storageBucket: "fruver-cdd40.appspot.com",
  messagingSenderId: "489831079002",
  appId: "1:489831079002:web:829127231cd030aa140c63"
};
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export {
  db,
  googleAuthProvider,
  facebookAuthProvider,
  firebase
}