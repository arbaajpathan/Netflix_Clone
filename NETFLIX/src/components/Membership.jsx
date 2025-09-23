// src/components/Membership.jsx

import React from 'react';

function Membership() {
    return (
        <div className="membership-section">
            <h3>
                Ready to watch? Enter your email to create or restart your membership.
            </h3>
            {/* This new div will align the input and button horizontally */}
            <div className="membership-form">
                <input
                    className="membership-input"
                    type="email"
                    placeholder="Email address"
                />
                <button className="membership-button">
                    Get Started &#8250;
                </button>
            </div>
        </div>
    );
}

export default Membership;