import React from 'react';
import Data from '../components/Data/Trainers';

export default function Trainer() {
  const trainers = Data.map((item) => {
    return (
      <div className="trainers-card">
        <img src={item.img} alt={item.name} />
        <h3>
          <i class="fa-solid fa-user"></i> {item.name}
        </h3>
        <div className="details">
          <p className="age">Age: {item.age}</p>
          <p className="age">
            <i class="fa-solid fa-star"></i> {item.rating}
          </p>
        </div>
      </div>
    );
  });
  return (
    <div className="trainers">
      <h2>OUR TRAINERS</h2>
      <div className="train">{trainers}</div>
    </div>
  );
}
