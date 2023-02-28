import axios from "axios";
import React, { useState } from "react";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            alert("submitted")
            await axios.post("http://localhost:5000/", {
                email,
                pass
            })
        }
        catch(e) {
            console.log(e);
        }
    }

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit} action="POST">
                <label htmlFor="email">Email</label>
                {/* setEmail(e.target.value) -> it will enter the mail whenever we enter something  */}
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" class="login-form" id="email" name="email" />  
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" class="login-form" id="password" name="password" />
                <div className="button_style">
                <button type="submit"><strong>Login</strong></button>
                <button type="submit"><strong>Cancel</strong></button>
            </div>
            </form>
            <div className="button_style">
                <p>Don't have an account?</p>
                <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Register here</button>
            </div>
            
        </div>
    )
}