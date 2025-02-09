import React, { useState } from 'react';
import './style.css';
const faqData = [
  {
    question: "What is MemeTracker?",
    answer: "MemeTracker is a platform that tracks and analyzes trending memes on Reddit(X) in real-time."
  },
  {
    question: "How does MemeTracker work?",
    answer: "MemeTracker uses AI and data analytics to monitor popular tweets, hashtags, and engagement metrics to identify viral memes."
  },
  {
    question: "Is MemeTracker free to use?",
    answer: "Yes! MemeTracker offers free access to trending memes, but premium features may be available for advanced analytics."
  },
  {
    question: "Can I search for specific memes?",
    answer: "Absolutely! You can search by keywords, hashtags, or specific Reddit accounts to find memes relevant to your interests."
  },
  {
    question: "How often is meme data updated?",
    answer: "Our system updates meme trends in real-time, ensuring you always have the latest viral content."
  },
  {
    question: "Does MemeTracker support multiple languages?",
    answer: "Yes! We track memes in various languages to provide global meme trends."
  },
  {
    question: "How can I submit a meme to be tracked?",
    answer: "If you find an interesting meme, you can tag us on Reddit ."
  },
  {
    question: "Does MemeTracker provide meme engagement statistics?",
    answer: "Yes! We provide insights like likes, retweets, comments, and overall reach of trending memes."
  },
  {
    question: "How can I contact support?",
    answer: "You can reach out to our support team via email or social media for any inquiries."
  }
];


const Questions = () => {
  const [activeIndex, setActiveIndex] = useState(null);



  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="section-container">
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
    </div>

  );
};

export default Questions;