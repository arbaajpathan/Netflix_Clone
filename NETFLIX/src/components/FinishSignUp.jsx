import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from './Footer'
// Accept the onLogout function as a prop from App.js
function FinishSignUp({ isLoggedIn }) {
    const navigate = useNavigate();

    return (
        <div className="finish-signup-page">
            {/* This page now has its own header
            <header className="finish-header">
                <img
                    src={netflixLogo}
                    alt="Netflix Logo"
                    className="finish-logo"
                    onClick={() => navigate('/')}
                />
                <button onClick={onLogout} className="finish-signout-btn">
                    Sign Out
                </button>
            </header> */}

            {/* This is a new wrapper to help with centering */}
            <main className="plan-form-wrapper">
                <div className="plan-form-content">
                    <span className="checkmark-icon-circle">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 13l4 4L19 7" stroke="#e50914" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </span>

                    <p className="step-indicator">STEP 1 OF 3</p>

                    <h2>Choose your plan.</h2>

                    <ul className="benefits-list">
                        <li className="benefit-item">
                            <svg className="benefit-checkmark" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 13l4 4L19 7" stroke="#e50914" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            No commitments, cancel anytime.
                        </li>
                        <li className="benefit-item">
                            <svg className="benefit-checkmark" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 13l4 4L19 7" stroke="#e50914" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            Everything on Netflix for one low price.
                        </li>
                        <li className="benefit-item">
                            <svg className="benefit-checkmark" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 13l4 4L19 7" stroke="#e50914" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            No ads and no extra fees. Ever.
                        </li>
                    </ul>
                    <Link to="/subscription" className="next-button">
                        <button className="next-button">Move Forward</button>
                    </Link>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default FinishSignUp;