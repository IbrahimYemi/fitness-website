import React from 'react';
import Price from '../components/Data/Pricing';

export default function Pricing() {
  const pricing = Price.map((item) => {
    return (
      <div key={item.keys} className="card">
        <div className="top">
          <span className="icon">
            <i className={item.logo}></i>
          </span>
          <h3 className="name">{item.name}</h3>
        </div>
        <span className="icon-meddle">
          <i className={item.logo}></i>
        </span>
        <div className="bottom">
          <div className="rating">{item.rating}</div>
          <p className="summary">{item.overview}</p>
        </div>
      </div>
    );
  });
  return (
    <div className="pricing">
      <h3>OUR PLANS</h3>
      <div className="price"> {pricing}</div>
    </div>
  );
}
