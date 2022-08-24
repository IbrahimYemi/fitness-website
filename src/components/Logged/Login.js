import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  const linkStyle = {
    textDecoration: 'none',
    color: '#f0821b',
  };
  return (
    <div className="user">
      <div className="login-card">
        <div className="header">
          <h1>LOGIN</h1>
          <button className="close">
            <Link to="/" style={linkStyle}>
              CLOSE
            </Link>
          </button>
        </div>
        <div className="card-body">
          <div className="card-input">
            <label htmlFor="name"> Name </label>
            <input type="text" name="name" placeholder="username" />
          </div>
          <div className="card-input">
            <label htmlFor="password"> password </label>
            <input type="password" placeholder="password" />
          </div>
          <button className="subscriber">Log in</button>
        </div>
        <p className="alert">
          kindly{' '}
          <a href="#">
            <Link to="/register" style={linkStyle}>
              Sign up
            </Link>
          </a>{' '}
          if you dont have an account yet!
        </p>
      </div>
    </div>
  );
}
