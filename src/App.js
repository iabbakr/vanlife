import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (

    <BrowserRouter>
      <Link className="site-logo" to="/">Vanlife</Link>
      <nav>
        <Link className="" to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
