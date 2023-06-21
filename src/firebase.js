import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC4nz6d4HUNpcGTLhftrEFQQuYqTcvRW0s",
  authDomain: "naij-6ec31.firebaseapp.com",
  projectId: "naij-6ec31",
  storageBucket: "naij-6ec31.appspot.com",
  messagingSenderId: "12665038740",
  appId: "1:12665038740:web:18bc944f3e23f782501181"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app); 

export default app;
