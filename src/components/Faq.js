import React from 'react';
import Faq from '../components/Data/Faq';

export default function Faq() {
  const faqs = Faq.map((item) => {
    const [acc, setAcc] = React.useState(false);

    function handleClick() {
      setAcc(!acc);
    }
    const style = {
      height: '17rem',
      margin: `1rem`,
      padding: `1rem`,
    };
    return (
      <div key={item.id} className="body" onClick={handleClick} style={style}>
        <p className="questions">
          <i className={acc ? item.show : item.hide}></i>
          {item.question}
        </p>
        {acc ? (
          <p className="answer">{item.answer}</p>
        ) : (
          <i class="fa-solid fa-circle-question"></i>
        )}
      </div>
    );
  });

  return (
    <div className="faq">
      <h2>
        <i class="fa-solid fa-circle-question"></i> FAQs
      </h2>
      <div className="faq-body">{faqs}</div>
    </div>
  );
}
