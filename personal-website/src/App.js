import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

import Home from './Home';
import About from './About';
import Programming from './Programming';
import Art from './Art';

import './App.css';
   
function App() {
  return (
    <Router>
      <div className="app">
        <nav className = "NavBar">
          <Link to="/" className='navbutton'>Home</Link>
          <Link to="/about" className='navbutton'>About</Link>
          <Link to="/Programming" className='navbutton'>Programming</Link>
          <Link to="/Art" className='navbutton'>Art</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Programming" element={<Programming />} />
          <Route path="/Art" element={<Art />} />
        </Routes>

      <div className="socials">
        <a href="https://github.com/CaitPrough" target="_blank" rel="noopener noreferrer" className="icon git">
          <FaGithub size={64} />
        </a>
        <a href="https://instagram.com/CaitPrough" target="_blank" rel="noopener noreferrer" className="icon insta">
          <FaInstagram size={64} />
        </a>
        <a href="https://linkedin.com/in/CaitPrough" target="_blank" rel="noopener noreferrer" className="icon in">
          <FaLinkedin size={64} />
        </a>
      </div>

      <footer>
        <p>© {new Date().getFullYear()} Cait Prough</p>
        <p>-.-. .- .. - ....... .--. .-. --- ..- --. ....</p>
      </footer>

    </div>
    </Router>
  );
}

export default App;
