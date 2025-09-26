
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const LockIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 10H7C5.89543 10 5 10.8954 5 12V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V12C19 10.8954 18.1046 10 17 10Z" stroke="#E50914" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 10V7C8 5.67392 8.52678 4.40215 9.46447 3.46447C10.4021 2.52678 11.6739 2 13 2C14.3261 2 15.5979 2.52678 16.5355 3.46447C17.4732 4.40215 18 5.67392 18 7V10" stroke="#E50914" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

function ChoosePayment() {
    return (
        <div style={{ backgroundColor: "white" }}>
            <div className="payment-page-container">
                <div className="payment-form-container">
                    <div className="lock-icon-wrapper">
                        <LockIcon />
                    </div>
                    <p className="step-indicator">Step 3 / 3</p>
                    <h1 className="main-heading">Choose a payment method</h1>
                    <p className="sub-text">
                        Your payment is encrypted and you can change your payment method at any time.
                    </p>
                    <p className="security-text">
                        <strong>Security for peace of mind.</strong><br />
                        Cancel easily online.
                    </p>
                    <div className="encryption-badge">
                        End-to-end encrypted <span role="img" aria-label="lock">🔒</span>
                    </div>
                    <div className="payment-options">
                        <Link to="/payment1opt">
                            <a href="#" className="payment-option">
                                <div className="payment-option-text">
                                    Credit or debit card
                                    <div className="payment-logos">
                                        <img src="https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/visa-v2.svg" alt="Visa" />
                                        <img src="https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/mastercard-v2.svg" alt="Mastercard" />
                                    </div>
                                </div>
                                <span className="chevron">&gt;</span>
                            </a>
                        </Link>
                        <Link to="/payment2opt">
                            <a href="#" className="payment-option">
                                <div className="payment-option-text">
                                    UPI Autopay
                                    <div className="payment-logos">
                                        <img src="https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/bhim-upi.svg" alt="BHIM UPI" />
                                        <img src="https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/paytm.svg" alt="Paytm" />
                                        <img src="https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/phonepe.svg" alt="PhonePe" />
                                        <img src="https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/amazonpay.svg" alt="Amazon Pay" />
                                        <img src="https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/gpay.svg" alt="Google Pay" />
                                    </div>
                                </div>
                                <span className="chevron">&gt;</span>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div >

    );
}

export default ChoosePayment;