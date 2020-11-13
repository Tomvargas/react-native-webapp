import firebase from 'firebase'
import 'firebase/firestore'

//firebase script
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
//end firebase script
  const db=firebase.firestore()//declare firebase call in db const
  export default{
      firebase,
      db
  }