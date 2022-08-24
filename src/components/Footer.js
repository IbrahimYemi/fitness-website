import React from 'react';
import {
  GrTwitter,
  GrFacebook,
  GrInstagram,
  GrPinterest,
  GrSnapchat,
} from 'react-icons/gr';

export default function Footer() {
  return (
    <div className="footer">
      <div className="list">
        <h3>ROYALTIES</h3>
        <div className="listing">
          <ul>
            <li>Sponsors</li>
            <li>Partners</li>
            <li>Loyalist</li>
            <li>Favorites</li>
            <li>Patrons</li>
          </ul>
          <ul>
            <li>Community</li>
            <li>Slack team</li>
            <li>Personnel</li>
            <li>Teams</li>
            <li>Services</li>
          </ul>
        </div>
      </div>
      <div className="social">
        <div className="medias">
          <GrTwitter className="twitter" />
          <GrFacebook className="facebook" />
          <GrInstagram className="instagram" />
          <GrPinterest className="pinterest" />
          <GrSnapchat className="snap" />
        </div>
        <p className="connect">
          connect with us on different social media platforms
        </p>
      </div>
      <div className="subscribe">
        <p className="texts">
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
    </div>
  );
}
