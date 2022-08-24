import React from 'react';
import User from '../components/Data/User';
import Services from './Services';
import Faq from './Faq';

export default function Home() {
  return (
    <div className="combined-home">
      <div className="home">
        <div className="word-page">
          <h3>
            <q>
              Once you are exercising regularly, the hardest thing is to stop
              it.
            </q>
            <cite>– Erin Gray</cite>
          </h3>
          <p>
            Taking responsibility - practicing 100 percent responsibility every
            day - is about seeing ourselves not as right or wrong, but as an
            agent, chooser, problem solver, and learner in the complex
            interrelationships of our lives so that we can better integrate with
            the people and world around us.
          </p>
          <button className="btn">Start Now</button>
        </div>
        <div className="picture-side">
          <img src={User[0].img} alt="user" />
          <div className="picture-gradient"></div>
        </div>
      </div>
      <Services />
      <Faq />
    </div>
  );
}
