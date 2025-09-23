// Middle.jsx

function Middle() {
    return (
        <>
            <div className="middle">
                <h1>Unlimited movies, TV shows and more.</h1>
                <h2>Starts at ₹149. Cancel at any time.</h2>
                {/* Or use your original "Watch anywhere..." text here */}
                <h3>
                    Ready to watch? Enter your email to create or restart your
                    membership.
                </h3>

                {/* This is the new container for the form */}
                <div className="email-form">
                    <input className="email-input" type="email" placeholder="Email address" />
                    <button className="get-started-btn">
                        Get Started &#8250;
                    </button>
                </div>

            </div>
        </>
    );
}

export default Middle;