import React from 'react';
import User from '../components/Data/Service';
import Perone from './Perone';

export default function Services() {
  const img =
    'https://media.istockphoto.com/photos/low-angle-view-asian-indian-macho-male-athlete-sit-ups-workout-at-gym-picture-id1332405597?k=20&m=1332405597&s=612x612&w=0&h=FAi1J7NkAIQ4zw-oq1H40poexPvGwC4PdyspKxL1t94=';

  const card = User.map((item) => {
    return (
      <Perone
        keys={item.id}
        name={item.name}
        rating={item.rating}
        overview={item.overview}
        logo={item.logo}
      />
    );
  });

  return (
    <div className="services">
      <div>
        <p className="statement">
          <span className="icon">
            <i className="fas fa-heart"></i> <em>Services</em>
          </span>
          To be wealthy is to be healthy, invest in your strength and fitness
          with us, let's build your habit together!
        </p>
        <div className="cards">{card}</div>
      </div>
      <div className="image">
        <img src={img} alt="service" />
      </div>
    </div>
  );
}
