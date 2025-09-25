import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Middle from './components/Middle';
import Movies from './components/Movies';
import Joinreason from './components/Joinreason';
import FAQ from './components/FAQ';
import Membership from './components/Membership';
import Footer from './components/Footer';
import Signup from './components/Signup';
import FinishSignUp from './components/FinishSignUp'
import './App.css';


// src/App.js



// ... your component imports (Home, Navbar, Middle, etc.)

function App() {
  const location = useLocation();
  const navigate = useNavigate(); // <-- For redirection in handleLogout

  // 1. The single source of truth for login state is now here in App.js
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 2. Check localStorage when the app first loads
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  // 3. The logout function now lives here
  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/'); // <-- Redirect to the homepage as requested
  };

  return (
    <>
      {/* 4. Pass the state and the logout function down to the Navbar as props */}
      {location.pathname !== "/signup" && <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              {/* 5. Pass the login state down to Middle as a prop */}
              <Middle isLoggedIn={isLoggedIn} />
              <Movies />
              <Joinreason />
              <FAQ />
              <Membership />
              <Footer />
            </>
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/finishsignup" element={<FinishSignUp />} />

      </Routes>
    </>
  );
}

export default App;