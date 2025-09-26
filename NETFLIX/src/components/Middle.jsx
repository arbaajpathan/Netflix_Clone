// src/components/Middle.jsx

import React from 'react'; // We no longer need useState or useEffect
import { Link } from "react-router-dom";

// 1. Accept `isLoggedIn` as a prop from App.js.
function Middle({ isLoggedIn }) {

    // 2. All local state and useEffect hooks have been removed.
    // This component is now a "dumb" component that only displays what it's told.

    return (
        <>
            <div className="middle">
                <h1>Unlimited movies, TV shows and more</h1>
                <h2>Watch anywhere. Cancel anytime.</h2>

                {/* 3. The conditional rendering now uses the `isLoggedIn` prop. */}
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
                    // IF LOGGED OUT, show the original email form:
                    <div>
                        <p>Ready to watch? Enter your email to create or restart your membership.</p>
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