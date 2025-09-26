// src/components/Membership.jsx

import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';



function Membership({ isLoggedIn }) {

    const [item, setitem] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            setitem(true)
        }

    }, [])
    return (
        <div className="membership-section">
            {/* 3. The conditional rendering now uses our local state variable 'isLoggedIn' */}
            {isLoggedIn ? (
                // IF LOGGED IN, show this button:
                <div className="email-form">
                    <Link to="/finishsignup">
                        <button className="get-started-btn">
                            Finish Sign Up
                        </button>
                    </Link>
                </div>
            ) : (
                // IF LOGGED OUT, show the original form:
                <div className="email-form">
                    <input
                        className="email-input"
                        type="email"
                        placeholder="Email address"
                    />
                    <button className="get-started-btn">Get Started &gt;</button>
                </div>
            )}
        </div>


    );
}

export default Membership;