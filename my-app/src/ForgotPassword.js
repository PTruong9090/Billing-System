import { sendPasswordResetEmail } from '@firebase/auth';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from './firebaseConfig';

const ForgotPassword = () => {
    const navigate = useNavigate();
    const handleSubmit = async(e)=>{
        e.preventDefault()
        const emailVal = e.target.email.value;
        sendPasswordResetEmail(auth, emailVal).then(data=>{
            alert("Check your email!")
        }).catch(error=>{
            alert(error.code)
        })
    }
    


    const login = () => {
        navigate('/');
    };



    return(
        <div className="login-container">
            <h1>EvenOut</h1>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <input name="email" placeholder="Email"/>
                <button onClick={login}>Cancel</button>
                <button>Reset</button>
            </form>
        </div>
    )
}

export default ForgotPassword;