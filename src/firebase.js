import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAu6EsKN49RHSsms7wTwM1mLxgMNiHy8C0",
    authDomain: "chat-n-lot.firebaseapp.com",
    projectId: "chat-n-lot",
    storageBucket: "chat-n-lot.appspot.com",
    messagingSenderId: "394346992801",
    appId: "1:394346992801:web:e4b97d9df3e4f665970ce0"
  };

  const app = firebase.initializeApp(firebaseConfig);
  const db = app.firestore(); 
  const auth = firebase.auth();
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const emailProvider = new firebase.auth.EmailAuthProvider();

  export { auth, googleProvider, db, emailProvider };