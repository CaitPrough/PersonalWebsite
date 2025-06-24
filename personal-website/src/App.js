import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './Home';
import About from './About';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className = "NavBar">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>

      <footer>
        <p>© {new Date().getFullYear()} Cait Prough</p>
      </footer>

    </div>
    </Router>
  );
}

export default App;
