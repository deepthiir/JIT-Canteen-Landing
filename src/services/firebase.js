import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyBzh1Q31buPcqTuie6WNLyFmzrumVRjn_M",
    authDomain: "web-project-021428.firebaseapp.com",
    projectId: "web-project-021428",
    storageBucket: "web-project-021428.appspot.com",
    messagingSenderId: "90166502692",
    appId: "1:90166502692:web:89be3dfc535e0efa8c3fb1",
    measurementId: "G-F76CCEVDHF"
};

var app = firebase.initializeApp(firebaseConfig);


export const auth = app.auth();
export const firestore = app.firestore();