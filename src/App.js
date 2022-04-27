import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.scss';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Portfolio from './components/pages/Work';
import About from "./components/pages/About";
import Contact from './components/pages/contact';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/Work' element={<Portfolio />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
         </Routes>
         <Footer />
      </Router>
    </>
  );
}

export default App;