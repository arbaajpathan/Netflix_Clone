// src/App.js

import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';

import Home from './components/Home';
import Middle from './components/Middle'; // Assuming you have this component
import Navbar from './components/navbar';
import Movies from './components/Movies';
import Joinreason from './components/Joinreason';
import FAQ from './components/FAQ';
import Membership from './components/Membership';
import Footer from './components/Footer';
import Signup from './components/Signup';
import FinishSignUp from './components/FinishSignUp';
import Signin from './components/Signin';
import ProtectedRoute from './components/ProtectedRoute';

import './App.css';

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/'); // After logout, redirect to the public homepage
  };

  return (
    <>
      {location.pathname !== "/signup" && location.pathname !== "/finishsignup" && (
        <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      )}

      <Routes>
        {/* === PUBLIC ROUTES === */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/finishsignup" element={<FinishSignUp />} />
        <Route
          path="/signin"
          element={<Signin onLoginSuccess={handleLoginSuccess} />}
        />

        {/* --- THE HOMEPAGE IS NOW A PUBLIC ROUTE --- */}
        {/* It renders different content based on the isLoggedIn prop */}
        <Route
          path="/"
          element={
            <>
              <Home />
              {/* Pass login state to Middle to show different buttons */}
              <Middle isLoggedIn={isLoggedIn} />
              <Movies />
              <Joinreason />
              <FAQ />
              <Membership isLoggedIn={isLoggedIn} />
              <Footer />
            </>
          }
        />

        {/* === PROTECTED ROUTES === */}
        {/* You can add future routes here that should be completely blocked */}
        {/* Example: <Route element={<ProtectedRoute isLoggedIn={isLoggedIn} />}>
                       <Route path="/account" element={<AccountPage />} />
                   </Route> */}
      </Routes>
    </>
  );
}

export default App;