import React from 'react';
import Gallery from '../components/Data/Gallery';

export default function Gallery() {
  const gallery = Gallery.map((item, index) => {
    console.log(item);
    return (
      <div className="image" key={index}>
        <img src={item} alt={index} />
      </div>
    );
  });
  return <div className="gallery">{gallery}</div>;
}
