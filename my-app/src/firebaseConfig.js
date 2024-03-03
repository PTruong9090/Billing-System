import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth/web-extension';

// Connect app to Firebase services
const firebaseConfig = {
  apiKey: "AIzaSyCzIMqHEGN2L8osfCiqMBN0lDG-TWhmyME",
  authDomain: "blitter-890d6.firebaseapp.com",
  projectId: "blitter-890d6",
  storageBucket: "blitter-890d6.appspot.com",
  messagingSenderId: "664599496533",
  appId: "1:664599496533:web:5d68050728172e9f5311dc"
};

// Create a Firebase app instance and get the authentication service (auth)
// auth variable provides access to Firebase authentication functionality
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };