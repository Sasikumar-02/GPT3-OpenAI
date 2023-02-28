import axios, { Axios } from "axios";
import React, { useEffect, useState } from "react";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const getData = async() => {
        const response = await Axios.get("http://localhost:5000/getData");
        setName(response.name);
        setEmail(response.email);
        setPass(response.pass);
    }

    useEffect(()=> {
        getData();
    }, []);

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            alert("submitted")
            await axios.post("http://localhost:5000/", {
                name,
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
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit} action="POST">
            <label htmlFor="name">Name</label>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} class="register-form" id="name"/>
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" class="register-form" id="email" name="email" />
            <label htmlFor="password">Password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" class="register-form" id="password" name="password" />
            <div className="button_style">
                <button type="submit"><strong>Signup</strong></button>
                <button type="submit"><strong>Cancel</strong></button>
            </div>
            
        </form>
        <div className="button_style">
            <p>Already have an account?</p>
            <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Login here</button>
        </div>
    </div>
    )
}