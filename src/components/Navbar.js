import React, { useState } from 'react';
import { GoThreeBars } from 'react-icons/go';
import { BsFillBarChartFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

export default function Navbar({ logged, signed }) {
  const [bar, setBar] = useState(false);
  function handleClick() {
    setBar((prevBar) => !prevBar);
  }
  const linkStyle = {
    textDecoration: 'none',
    color: '#fefffe',
  };

  return (
    <nav>
      <h1>
        <Link to="/" style={linkStyle}>
          T-fit
        </Link>
      </h1>
      <div className={bar ? 'div show' : 'div'}>
        <ul>
          <li>
            <Link to="/" style={linkStyle}>
              HOME
            </Link>
          </li>

          <li>
            <Link to="/about" style={linkStyle}>
              ABOUT
            </Link>
          </li>

          <li>
            <Link to="/gallery" style={linkStyle}>
              GALLERY{' '}
            </Link>
          </li>

          <li>
            <Link to="/pricing" style={linkStyle}>
              PRICING
            </Link>
          </li>

          <li>
            <Link to="/trainers" style={linkStyle}>
              TRAINERS
            </Link>
          </li>
        </ul>
        <div className="bar-login">
          <button className="btn login" onClick={logged}>
            <Link to="/login" style={linkStyle}>
              Login
            </Link>
          </button>
          <button className="btn signup" onClick={signed}>
            <Link to="/register" style={linkStyle}>
              Sign up
            </Link>
          </button>
        </div>
      </div>
      <div className="bar-holder">
        {!bar ? (
          <GoThreeBars className="bars" onClick={handleClick} />
        ) : (
          <BsFillBarChartFill className="bars" onClick={handleClick} />
        )}
      </div>
    </nav>
  );
}
