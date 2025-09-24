import { Routes, Route } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Middle from './components/Middle';
import Movies from './components/Movies';
import Joinreason from './components/Joinreason';
import FAQ from './components/FAQ';
import Membership from './components/Membership';
import Footer from './components/Footer';
import Signup from './components/Signup';
import './App.css';



function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== '/signup' && <Navbar />}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Middle />
              <Movies />
              <Joinreason />
              <FAQ />
              <Membership />
              <Footer />
            </>
          }
        />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
