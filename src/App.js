import React, { useState } from 'react';
import './index.scss';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import Faq from './components/Faq';
import Footer from './components/Footer';
import Newsletter from './components/Newsletter';
import Gallery from './components/Gallery';
import About from './components/About';
import Trainers from './components/Trainers';
import Pricing from './components/Pricing';
import Login from './components/Logged/Login';
import Register from './components/Logged/Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="output">
          <Routes>
            <Route exact path="/" caseSensitive={false} element={<Home />} />
            <Route path="/About" caseSensitive={false} element={<About />} />
            <Route
              path="/gallery"
              caseSensitive={false}
              element={<Gallery />}
            />
            <Route
              path="/pricing"
              caseSensitive={false}
              element={<Pricing />}
            />
            <Route
              path="/trainers"
              caseSensitive={false}
              element={<Trainers />}
            />
            <Route path="/login" caseSensitive={false} element={<Login />} />
            <Route
              path="/register"
              caseSensitive={false}
              element={<Register />}
            />
          </Routes>
          <Newsletter />
        </div>
        <Footer />
      </div>
    </Router>
  );
}
