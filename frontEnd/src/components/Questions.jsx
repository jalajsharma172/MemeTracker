import React, { useState } from 'react';
import './style-com.css';
const faqData = [
  {
    question: "What is Memecoin?",
    answer: "Memecoin is a cryptocurrency that is inspired by internet memes and trends."
  },
  {
    question: "How can I buy Memecoin?",
    answer: "You can buy Memecoin on various cryptocurrency exchanges that support it."
  },
  {
    question: "Is Memecoin a good investment?",
    answer: "As with any investment, it's important to do your own research and understand the risks involved."
  },
  {
    question: "How do I store Memecoin?",
    answer: "You can store Memecoin in a cryptocurrency wallet that supports it."
  },
  {
    question: "What are the benefits of using Memecoin?",
    answer: "Memecoin offers fast transactions, low fees, and a fun community."
  }
];

const Questions = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      {faqData.map((item, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => toggleFAQ(index)}>
            {item.question}
          </div>
          {activeIndex === index && <div className="faq-answer">{item.answer}</div>}
        </div>
      ))}
    </div>
  );
};

export default Questions;