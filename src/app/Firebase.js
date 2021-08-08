import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyByJGNzKHHl0m_zMl994TNsEtC5EieDuq8",
  authDomain: "ethereum-7e386.firebaseapp.com",
  projectId: "ethereum-7e386",
  storageBucket: "ethereum-7e386.appspot.com",
  messagingSenderId: "72101088673",
  appId: "1:72101088673:web:2ffeb6e5839bd603c08fe0",
  measurementId: "G-4JWX4K6KFB",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
