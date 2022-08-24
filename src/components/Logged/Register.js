import React from 'react';
import { Link } from 'react-router-dom';

export default function Register() {
  const linkStyle = {
    textDecoration: 'none',
    color: '#f0821b',
  };
  return (
    <div className="user">
      <div className="login-card">
        <div className="header">
          <h1>Register</h1>
          <button className="close">
            <Link to="/" style={linkStyle}>
              CLOSE
            </Link>
          </button>
        </div>
        <div className="card-body">
          <div className="card-input">
            <label htmlFor="name"> Name</label>
            <input type="text" name="name" placeholder="your full name" />
          </div>
          <div className="card-input">
            <label htmlFor="email"> Email</label>
            <input type="email" placeholder="your email" />
          </div>
          <div className="card-input">
            <label htmlFor="password"> password</label>
            <input type="password" placeholder="your password" />
          </div>
          <div className="card-input">
            <label htmlFor="password"> confirm password</label>
            <input type="password" placeholder="your password" />
          </div>
          <button className="subscriber">Sign up</button>
        </div>
        <p className="alert">
          kindly{' '}
          <a href="#">
            <Link to="/login" style={linkStyle}>
              login
            </Link>
          </a>{' '}
          if you already have an account!
        </p>
      </div>
    </div>
  );
}
