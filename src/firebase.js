import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAcPxIYGbA5QQhcajuHUUOZvNtRxUq0AHA",
  authDomain: "chloemall.firebaseapp.com",
  projectId: "chloemall",
  storageBucket: "chloemall.appspot.com",
  messagingSenderId: "972719429423",
  appId: "1:972719429423:web:789ccdc1b06e950fbef3da"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
