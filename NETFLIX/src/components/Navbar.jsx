import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (<>
        <nav className="navbar">
            <button className="language-btn">Language ▼</button>
            <Link to="/signup">
                <button className="signin-btn">Sign In</button>
            </Link>
        </nav>
    </>)
}


export default Navbar;