// src/components/OptionTwo.jsx

import React, { useState, useEffect } from 'react'; // Import useEffect
import Footer from './Footer';


function OptionTwo() {
    const [selectedUpiApp, setSelectedUpiApp] = useState('');
    const [upiId, setUpiId] = useState('');

    // --- THIS IS THE FIX ---
    // This hook changes the entire page's background color
    useEffect(() => {
        // When the component mounts, set the body background to white
        document.body.style.backgroundColor = '#fff';

        // When the component unmounts, clean up and set it back to black
        // This ensures the rest of your app keeps its dark theme.
        return () => {
            document.body.style.backgroundColor = '#000';
        };
    }, []); // The empty array ensures this runs only once on mount and unmount

    const handleSubmit = (e) => {
        e.preventDefault();
        // ... your submission logic
    };

    return (
        // The page layout is now simpler as the body handles the background
        <div className="option-two-page-layout">
            <main className="option-two-content-area">
                <div className="upi-form-wrapper">
                    <h1 className="main-heading">Set up UPI AutoPay.</h1>
                    <p className="sub-text">
                        You can update your periodic payments at any time in your settings.
                    </p>
                    <form onSubmit={handleSubmit} className="upi-form">
                        <div className="form-group">
                            <select id="upiApp" value={selectedUpiApp} onChange={(e) => setSelectedUpiApp(e.target.value)} required>
                                <option value="" disabled>Select your UPI app</option>
                                <option value="gpay">Google Pay</option>
                                <option value="phonepe">PhonePe</option>
                                <option value="paytm">Paytm</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <input type="text" id="upiId" placeholder="UPI ID" value={upiId} onChange={(e) => setUpiId(e.target.value)} required />
                        </div>
                        <a href="#" className="help-link">How do I view my UPI ID?</a>
                        <button type="submit" className="submit-btn">
                            Move forward
                        </button>
                    </form>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default OptionTwo;