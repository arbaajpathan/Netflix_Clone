import Home from './components/Home'
import Navbar from './components/navbar'
import './App.css'
import Middle from './components/Middle'
import Movies from './components/Movies'
import Joinreason from './components/Joinreason'
import FAQ from './components/FAQ'
import Membership from './components/Membership'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Signup from './components/Signup'
function App() {

  return (
    <>
      <Home />
      <Navbar />
      <Middle />
      <Movies />
      <Joinreason />
      <FAQ />
      <Membership />
      <Footer />
      <Routes>
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </>
  )
}

export default App;
