import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// Import the auth object from the firebaseConfig file
import { auth } from './firebaseConfig';
import './App.css';


const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Set up an event listener to detect changes in the authentication state
    const unsubscribe = auth.onAuthStateChanged(user => {
      // If no user is detected (not authenticated), navigate to the home page
      if (!user) {
        navigate('/'); 
      }
    });

    // Clean up the event listener when the component is unmounted
    return () => unsubscribe();
  }, [navigate]); //Dependencies: useEffect will re-run if navigate changes

  const signOut = () => {
    // Sign out the user using the signOut method from the auth object
    auth.signOut().then(() => {
      navigate('/'); // After signing out, navigate to the home page
    }).catch((error) => {
      alert(error.message);
    });
  };

  return (
    <div className="login-container">
      <h2>EvenOut</h2>
      <p className="creative-element">You have successfully logged in!</p>
      <button onClick={signOut}>Sign Out</button>
    </div>
  );
};

export default Dashboard;