import React from "react";
import homeBg from "../assets/home-bg.jpg";
import Footer from "./Footer";

function Signup() {
    const HandleSignIN = () => {
        alert("Sign In functionality is not implemented yet.");
    }


    return (
        <div>
            <div className="signup-page">
                <img className="home-bg" src={homeBg} alt="netflix background" />

                {/* Overlay */}
                <div className="overlay"></div>

                {/* Centered Form */}
                <div className="signup-container">
                    <h1>Sign In</h1>

                    <div className="form-group">
                        <input type="text" placeholder="Email or mobile number" />
                        <input type="password" placeholder="Password" />
                    </div>

                    <div className="form-actions">
                        <button className="btn-signin" onClick={HandleSignIN}>Sign In</button>
                        <p className="or-text">OR</p>
                        <button className="btn-code">Use a sign-in code</button>
                        <a href="/password-reset" className="forgot-password">Forgot password?</a>
                    </div>

                    <div className="form-help">
                        <div className="remember-me">
                            <input type="checkbox" id="remember" />
                            <label htmlFor="remember">Remember me</label>
                        </div>

                        <p className="signup-now">
                            New to Netflix? <a href="/signup">Sign up now.</a>
                        </p>

                        <p className="recaptcha-info">
                            This page is protected by Google reCAPTCHA to ensure you're not a bot.
                            <a href="#"> Learn more.</a>
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    );
}

export default Signup;
