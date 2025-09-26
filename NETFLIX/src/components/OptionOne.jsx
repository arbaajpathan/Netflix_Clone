// src/components/OptionOne.jsx

import React, { useState } from 'react';
import Footer from './Footer';

// Local SVG component for the card icon inside the input field
const CardIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 4H4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4Z" stroke="#8c8c8c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 10H22" stroke="#8c8c8c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

function OptionOne() {
    // State to manage the form inputs
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [nameOnCard, setNameOnCard] = useState('');
    const [agreed, setAgreed] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ cardNumber, expiryDate, cvv, nameOnCard, agreed });
        alert('Form submitted! Check the console for data.');
    };

    return (
        <div style={{ backgroundColor: "white" }}>
            <div className="option-one-container">
                <div className="credit-card-form-wrapper">
                    <h1 className="main-heading">Set up your credit or debit card</h1>
                    <div className="card-logos">
                        <img src="https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/visa-v2.svg" alt="Visa" />
                        <img src="https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/mastercard-v2.svg" alt="Mastercard" />
                    </div>

                    <form onSubmit={handleSubmit} className="card-form">
                        <div className="form-group input-with-icon">
                            <input type="text" id="cardNumber" placeholder="Card Number" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} required />
                            <span className="input-icon"><CardIcon /></span>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <input type="text" id="expiryDate" placeholder="Expiry date" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} required />
                            </div>
                            <div className="form-group input-with-icon">
                                <input type="text" id="cvv" placeholder="CVV" value={cvv} onChange={(e) => setCvv(e.target.value)} required />
                                <span className="input-icon help-icon">?</span>
                            </div>
                        </div>
                        <div className="form-group">
                            <input type="text" id="nameOnCard" placeholder="Name on the card" value={nameOnCard} onChange={(e) => setNameOnCard(e.target.value)} required />
                        </div>

                        <div className="plan-summary">
                            <div className="plan-details">
                                <span className="price">₹199/month</span>
                                <span className="plan-name">Basic</span>
                            </div>
                            <a href="#" className="change-link">Change</a>
                        </div>

                        <p className="legal-text small">
                            All payments above ₹2000 will require another authentication.
                        </p>
                        <p className="legal-text">
                            By clicking the checkbox below, you acknowledge that you accept our <a href="#">Terms of Use</a>, <a href="#">Privacy Statement</a>, and are over 18. Netflix will automatically continue your membership and charge your payment method the membership fee (currently ₹199/month) until you cancel. You can cancel your membership at any time to avoid future charges.
                        </p>

                        <div className="agreement-checkbox">
                            <input type="checkbox" id="agreement" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} required />
                            <label htmlFor="agreement">I agree.</label>
                        </div>

                        <button type="submit" className="submit-membership-btn">
                            Start a membership
                        </button>

                        <p className="recaptcha-notice">
                            This page is protected by Google reCAPTCHA to make sure you're not a bot. <a href="#">Learn more.</a>
                        </p>

                    </form>

                </div>

            </div>
            <Footer />
        </div>
    );
}

export default OptionOne;