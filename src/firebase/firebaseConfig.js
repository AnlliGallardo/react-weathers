
import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth"
import { getFirestore } from 'firebase/firestore'



const firebaseConfig = {
  apiKey: "AIzaSyAh3F1jrPueJDwyY7MoR47syyeazSP1Jk0",
  authDomain: "proyectofirebase-ed06e.firebaseapp.com",
  projectId: "proyectofirebase-ed06e",
  storageBucket: "proyectofirebase-ed06e.appspot.com",
  messagingSenderId: "504296106965",
  appId: "1:504296106965:web:fdc6c7aa1ce8dd3e912b5c"
};


const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider();
const facebook = new FacebookAuthProvider();
const db = getFirestore(app)

export{
    app,
    google,
    facebook,
    db
}