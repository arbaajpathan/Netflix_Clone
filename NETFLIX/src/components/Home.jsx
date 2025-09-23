import React from "react";
import homeBg from "../assets/home-bg.jpg";
import Netflix_Logo from "../assets/Netflix_Logo.png";

function Home() {
    return (
        <>
            <img className="home-bg" src={homeBg} alt="netflix" />
            <img className="Netflix_Logo" src={Netflix_Logo} alt="netflix-logo" />
        </>
    );
}

export default Home;
