import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';

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

      <footer>
        <p>© {new Date().getFullYear()} Cait Prough</p>
      </footer>

    </div>
    </Router>
  );
}

export default App;
