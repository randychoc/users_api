const firebase = require("firebase");
require("firebase/firestore");

firebase.initializeApp({
  apiKey: "AIzaSyBULEKhWxZb4gN51q8c0LHeBO_dCw1u8Es",
  authDomain: "blautechtest.firebaseapp.com",
  projectId: "blautechtest",
  storageBucket: "blautechtest.appspot.com",
  messagingSenderId: "557103668463",
  appId: "1:557103668463:web:91db5d9798b4ef07be0f1a",
});

const db = firebase.firestore();

module.exports = db;
