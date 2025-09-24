import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import axios from "axios";
import homeBg from "../assets/home-bg.jpg";
import Footer from "./Footer";

function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate(); // Hook for redirection

    const handleSignupAndLogin = async (e) => {
        e.preventDefault();
        setError("");

        if (!email || !password) {
            setError("Please enter both email and password.");
            return;
        }

        try {
            // FIX #1 & #2: Use correct port and correct axios syntax.
            // axios.post takes the URL and the data object as arguments.
            const response = await axios.post("http://localhost:5000/api/signup", {
                email: email,
                password: password,
            });

            // FIX #3: Handle the successful response
            // The token is in response.data.token (based on our backend)
            const token = response.data.token;

            // Save the token to localStorage
            localStorage.setItem('token', token);

            // Redirect the user to the main page
            navigate('/');

        } catch (err) {
            // FIX #4: Handle errors from axios
            // 'err.response.data.message' will contain the error message from our server
            if (err.response && err.response.data && err.response.data.message) {
                setError(err.response.data.message);
            } else {
                setError("Signup failed. Please try again.");
            }
            console.error("Signup error:", err);
        }
    };

    return (
        <div>
            <div className="signup-page">
                <img className="home-bg" src={homeBg} alt="netflix background" />
                <div className="overlay"></div>
                <div className="signup-container">
                    <h1>Sign Up</h1> {/* Changed from Sign In to Sign Up for clarity */}

                    {/* This form structure is fine */}
                    <form onSubmit={handleSignupAndLogin}>
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
                            <button className="btn-signin" type="submit">Sign Up</button>
                            {/* ... Rest of your form ... */}
                        </div>
                    </form>

                    {/* ... Rest of your component ... */}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Signup;