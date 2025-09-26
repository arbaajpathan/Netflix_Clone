// src/components/Navbar.jsx

import React from "react";
import { Link } from "react-router-dom";

// This component is now simplified. It receives its state as props.
function Navbar({ isLoggedIn, onLogout }) {

    return (
        <nav className="navbar">
            <button className="language-btn">Language ▼</button>

            {/* If the user is logged in, show the Sign Out button */}
            {isLoggedIn ? (
                <button onClick={onLogout} className="signin-btn">
                    Sign Out
                </button>
            ) : (
                // If logged out, show the Sign In button that links to the correct page
                <Link to="/signin">
                    <button className="signin-btn">Sign In</button>
                </Link>
            )}
        </nav>
    );
}

export default Navbar;