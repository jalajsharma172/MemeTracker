import React from "react";
import './MemeFeed.css'
const MemeFeed = () => {
  return (
    <section className="meme-feed">
      <div className="text-content">
        <h2>Curated Memecoin Feed <br /> From Twitter</h2>
        <p>
        Jainwin ContentJainwin ContentJainwin ContentJainwin ContentJainwin ContentJainwin ContentJainwin 
        Jainwin Content
        </p>
      </div>

      <div className="image-content">
        <img src="/assets/meme1.png" alt="Meme 1" />
        <img src="/assets/meme2.png" alt="Meme 2" />
      </div>
    </section>
  );
};

export default MemeFeed;
