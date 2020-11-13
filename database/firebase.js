import firebase from 'firebase'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyBb2BIDPZi2B8-cdXDIYWFU4ciG5cg9hHk",
    authDomain: "ecom-ec.firebaseapp.com",
    databaseURL: "https://ecom-ec.firebaseio.com",
    projectId: "ecom-ec",
    storageBucket: "ecom-ec.appspot.com",
    messagingSenderId: "99809411140",
    appId: "1:99809411140:web:25701f2c5426726b51fc11",
    measurementId: "G-ZJ0M2S2ZQS"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db=firebase.firestore()
  export default{
      firebase,
      db
  }