import Firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCJmrIyXLOixoVpAbnJLOfofBU0W9_1wW4",
  authDomain: "currency-converter-7bfa3.firebaseapp.com",
  projectId: "currency-converter-7bfa3",
  storageBucket: "currency-converter-7bfa3.appspot.com",
  messagingSenderId: "210664379235",
  appId: "1:210664379235:web:a601199a38c0ebdda6b956",
};

export const firebase = Firebase.initializeApp(firebaseConfig);
export var googleAuthProvider = new Firebase.auth.GoogleAuthProvider();
