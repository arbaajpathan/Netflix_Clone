// src/components/Navbar.jsx

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    // Just like in Middle.js, we check the login status when the component mounts
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsLoggedIn(true);
        }
    }, []);

    const handleLogout = () => {
        // 1. Remove the token from localStorage
        localStorage.removeItem('token');

        // 2. Update this component's local state
        setIsLoggedIn(false);

        // 3. Redirect the user
        navigate('/signup');
    };

    return (
        <nav className="navbar">
            <button className="language-btn">Language ▼</button>

            {isLoggedIn ? (
                <button onClick={handleLogout} className="signin-btn">
                    Sign Out
                </button>
            ) : (
                <Link to="/signup">
                    <button className="signin-btn">Sign Up</button>
                </Link>
            )}
        </nav>
    );
}

export default Navbar;