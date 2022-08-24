import React from 'react';

export default function Newsletter() {
  return (
    <div className="subscribe">
      <p className="text">
        Gain weekly health tips and daily benefits plus stay informed on our
        latest offers!
      </p>
      <div className="design">
        <input type="text" className="input" placeholder="stay informed" />
        <button className="subscribed" stylt={{ textAlign: 'center' }}>
          Subscribe
        </button>
      </div>
    </div>
  );
}
