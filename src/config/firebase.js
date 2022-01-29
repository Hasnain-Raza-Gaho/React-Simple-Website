import  firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBmhkV5_xesju_qP5ZlQf0SrAj0xhk10g0",
  authDomain: "raza-stuff.firebaseapp.com",
  databaseURL: "https://raza-stuff-default-rtdb.firebaseio.com",
  projectId: "raza-stuff",
  storageBucket: "raza-stuff.appspot.com",
  messagingSenderId: "628992143595",
  appId: "1:628992143595:web:1babf08132fb6af44a8eae"
};

  // console.log(firebase.database)

firebase.initializeApp(firebaseConfig);

const Storage = firebase.storage();

  export { Storage, firebase as default } 