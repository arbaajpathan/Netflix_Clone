import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import homeBg from "../assets/home-bg.jpg";
import Footer from "./Footer";
import { Link } from "react-router-dom";

// THE FIX IS HERE: The component now accepts `onLoginSuccess` as a prop.
function Signin({ onLoginSuccess }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");

        if (!email || !password) {
            setError("Please enter both email and password.");
            return;
        }

        try {
            const response = await axios.post("http://localhost:5000/api/signin", {
                email: email,
                password: password,
            });

            const token = response.data.token;
            localStorage.setItem('token', token);

            // This will now work because onLoginSuccess was passed in as a prop.
            onLoginSuccess();

            // Navigate to the home page after successfully logging in.
            navigate('/');

        } catch (err) {
            if (err.response && err.response.data && err.response.data.message) {
                setError(err.response.data.message);
            } else {
                setError("Login failed. Please check your connection and try again.");
            }
            console.error("Login error:", err);
        }
    };

    return (
        <div>
            <div className="signup-page">
                <img className="home-bg" src={homeBg} alt="netflix background" />
                <div className="overlay"></div>
                <div className="signup-container">
                    <h1>Sign In</h1>

                    <form onSubmit={handleLogin}>
                        {error && <p style={{ color: 'orange', textAlign: 'center' }}>{error}</p>}
                        <div className="form-group">
                            <input
                                type="email"
                                placeholder="Email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-actions">
                            <button className="btn-signin" type="submit">Sign In</button>
                        </div>
                        <div className="sign">
                            <h5>Don't have an account? <Link to="/Signup">Sign Up</Link></h5>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Signin;