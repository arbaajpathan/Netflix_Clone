// Middle.jsx
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
function Middle() {
    const [loggedIn, SetloggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            SetloggedIn(true);
        }
    }, [])


    return (
        <>
            <div className="middle">
                <h1>Unlimited movies, TV shows and more</h1>
                <h2>Watch anywhere. Cancel anytime.</h2>

                {/* 3. The conditional rendering now uses our local state variable 'isLoggedIn' */}
                {loggedIn ? (
                    // IF LOGGED IN, show this button:
                    <div className="email-form">
                        <Link to="/">
                            <button className="get-started-btn">
                                Finish Sign Up
                            </button>
                        </Link>
                    </div>
                ) : (
                    // IF LOGGED OUT, show the original form:
                    <div>
                        <div className="email-form">
                            <input
                                className="email-input"
                                type="email"
                                placeholder="Email address"
                            />
                            <button className="get-started-btn">Get Started &gt;</button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default Middle;