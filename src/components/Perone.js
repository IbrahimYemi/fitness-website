import React from 'react';
import User from '../components/Data/Service';

export default function Perone({ name, keys, overview, rating, logo }) {
  return (
    <div key={keys} className="card">
      <div className="top">
        <span className="icon">
          <i className={logo}></i>
        </span>
        <h3 className="name">{name}</h3>
      </div>
      <div className="bottom">
        <div className="rating">{rating}</div>
        <p className="summary">{overview}</p>
      </div>
    </div>
  );
}
