// src/components/Subscription.jsx

import React, { useState } from 'react';
import Navbar from './navbar'; // Assuming Navbar is in the same folder
import Footer from './Footer';   // Assuming Footer is in the same folder
import { Link } from 'react-router-dom';

// Data for the subscription plans
const plans = [
    {
        name: 'Mobile',
        resolution: '480p',
        price: '149',
        videoQuality: 'Correct',
        supportedDevices: 'Mobile phones, tablets',
        simultaneousStreams: 1,
        downloadDevices: 1,
        color: 'blue'
    },
    {
        name: 'Basic',
        resolution: '720p',
        price: '199',
        videoQuality: 'Excellent',
        supportedDevices: 'TV, computer, mobile phone, tablet',
        simultaneousStreams: 1,
        downloadDevices: 1,
        isMostPopular: true,
        color: 'purple'
    },
    {
        name: 'Standard',
        resolution: '1080p',
        price: '499',
        videoQuality: 'very nice',
        supportedDevices: 'TV, computer, mobile phone, tablet',
        simultaneousStreams: 2,
        downloadDevices: 2,
        color: 'purple'
    },
    {
        name: 'Premium',
        resolution: '4K + HDR',
        price: '649',
        videoQuality: 'The best',
        supportedDevices: 'TV, computer, mobile phone, tablet',
        simultaneousStreams: 4,
        downloadDevices: 6,
        specialFeature: 'Spatial Audio (Best Sound) This includes',
        color: 'red'
    }
];

// Reusable component for each detail row in the card
const PlanDetail = ({ label, value }) => (
    <div className="plan-detail-item">
        <p className="detail-label">{label}</p>
        <p className="detail-value">{value}</p>
    </div>
);

function Subscription() {
    // State to track the currently selected plan, defaulting to 'Basic'
    const [selectedPlan, setSelectedPlan] = useState('Basic');

    return (
        <div className="subscription-page">
            {/* <Navbar /> */}
            <div className="subscription-container">
                <div className="header-section">
                    <h1 className="main-heading">Choose the right plan for you</h1>
                </div>

                <div className="plans-grid">
                    {plans.map((plan) => (
                        <div
                            key={plan.name}
                            className={`plan-card ${selectedPlan === plan.name ? 'selected' : ''}`}
                            onClick={() => setSelectedPlan(plan.name)}
                        >
                            {plan.isMostPopular && (
                                <div className="most-popular-badge"></div>
                            )}
                            <div className={`plan-header plan-${plan.color}`}>
                                <h3>{plan.name}</h3>
                                <p>{plan.resolution}</p>
                                {selectedPlan === plan.name && (
                                    <div className="checkmark">✔</div>
                                )}
                            </div>
                            <div className="plan-details">
                                <PlanDetail label="Monthly price" value={`₹${plan.price}`} />
                                <hr />
                                <PlanDetail label="Video and sound quality" value={plan.videoQuality} />
                                <hr />
                                <PlanDetail label="resolution" value={plan.resolution === '1080p' ? '1080p (Full HD)' : plan.resolution === '720p' ? '720p (HD)' : plan.resolution} />
                                <hr />
                                {plan.specialFeature && (
                                    <>
                                        <PlanDetail label="Spatial Audio (Best Sound)" value="This includes" />
                                        <hr />
                                    </>
                                )}
                                <PlanDetail label="Supported devices" value={plan.supportedDevices} />
                                <hr />
                                <PlanDetail label="Can be viewed on all your family's devices at the same time" value={plan.simultaneousStreams} />
                                <hr />
                                <PlanDetail label="Download Device" value={plan.downloadDevices} />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="footer-section">
                    <p className="legal-text">
                        Availability of HD (720p), Full HD (1080p), Ultra HD (4K), and HDR depends on your internet service and device capabilities. Not all content is available in all resolutions. See our <a href="#">Terms of Use</a> for more details.
                    </p>
                    <p className="legal-text">
                        Only people who live with you can use your account. Watch on up to 4 different devices at the same time with the Premium subscription, 2 devices with the Standard subscription, and only 1 device with the Basic and Mobile subscriptions.
                    </p>
                    <p className="legal-text">
                        Any Netflix plan includes live events as well as ads.
                    </p>
                    <Link to="/choosepayment">
                        <button className="move-forward-btn">Move forward</button>
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Subscription;