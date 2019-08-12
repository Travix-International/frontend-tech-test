import firebase from 'firebase'

//Initialize Firebase
const config = {
  apiKey: "AIzaSyCtA2UfdkQL5ANps_DZupYb0CM2pwF_dI4",
  authDomain: "travix-d7a72.firebaseapp.com",
  databaseURL: "https://travix-d7a72.firebaseio.com",
  projectId: "travix-d7a72",
  storageBucket: "",
  messagingSenderId: "259348479088",
  appId: "1:259348479088:web:7b6fd6da44e8d3a5"
};

firebase.initializeApp(config);
const auth = firebase.auth();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

const database = firebase.database();
export {
  auth,
  database,
  googleAuthProvider
};

