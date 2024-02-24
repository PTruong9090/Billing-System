import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import './App.css'; // Import the CSS file

const firebaseConfig = {
  apiKey: "AIzaSyCzIMqHEGN2L8osfCiqMBN0lDG-TWhmyME",
  authDomain: "blitter-890d6.firebaseapp.com",
  projectId: "blitter-890d6",
  storageBucket: "blitter-890d6.appspot.com",
  messagingSenderId: "664599496533",
  appId: "1:664599496533:web:5d68050728172e9f5311dc"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const LoginSignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const signIn = () => {
    if (!email || !password) {
      setErrorMessage("Please enter a valid email and password.");
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        window.location.href = 'page2.html'; // Redirect to the landing page after login
      })
      .catch(error => {
        setErrorMessage("Wrong email or password");
      });
  }

  const signUp = () => {
    if (!email || !password) {
      setErrorMessage("Please enter a valid email and password.");
      return;
    }
  
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert('Account created successfully!');
        window.location.href = 'page2.html'; // Redirect to the landing page after signup
      })
      .catch(error => {
        switch (error.code) {
          case 'auth/invalid-email':
            setErrorMessage("Invalid email address. Please enter a valid email.");
            break;
          case 'auth/email-already-in-use':
            setErrorMessage("Email is already in use");
            break;
          default:
            setErrorMessage("Error creating account. Please try again later.");
        }
      });
  }

  return (
    <div className="login-container">
      <h1>Blitter</h1>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={signIn}>Sign In</button>
      <button onClick={signUp}>Sign Up</button>
      <p id="errorMessage" style={{ color: '#fff' }}>{errorMessage}</p>
    </div>
  );
}

export default LoginSignUp;