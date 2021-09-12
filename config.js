import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  //Add configuration here
  apiKey: "AIzaSyDH6q26P6bsgNfP_rgcwXJh7Btpxejq64I",
  authDomain: "newsletter-de975.firebaseapp.com",
  databaseURL: "https://newsletter-de975-default-rtdb.firebaseio.com",
  projectId: "newsletter-de975",
  storageBucket: "newsletter-de975.appspot.com",
  messagingSenderId: "866811848648",
  appId: "1:866811848648:web:a9e709dcd9f4654ecc02fd"
};

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

