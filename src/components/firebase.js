import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
    
        apiKey: "AIzaSyAgsumu71kQ5zGegVMcM0la9trfM6H7hfQ",
        authDomain: "react-contact-form-33613.firebaseapp.com",
        databaseURL: "https://react-contact-form-33613.firebaseio.com",
        projectId: "react-contact-form-33613",
        storageBucket: "react-contact-form-33613.appspot.com",
        messagingSenderId: "858144431770",
        appId: "1:858144431770:web:3432adf87519723dd54923"
      });


var db = firebaseApp.firestore();

export { db };