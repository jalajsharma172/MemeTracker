import React, { useEffect, useState } from "react";
import './MemeFeed.css';

const MemeFeed = () => {
  const images = [
    "/image1.png",
    "/image2.png",
    "/image3.png",
    "/image4.png",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="meme-feed">
      <div className="text-content">
        <h2>The Ultimate Twitter Meme Tracker!</h2>
        <p className="about-text">
          In the fast-moving world of <strong>memecoins and viral trends</strong>, staying updated is key!
        </p>
        <p className="about-cta">🔥 <strong>Got a meme-worthy trend? Submit your idea and be part of the fun!</strong></p>
      </div>

      <div className="image-content">
        <img src={images[currentImageIndex]} alt={`Meme ${currentImageIndex + 1}`} />
      </div>
    </section>
  );
};

export default MemeFeed;
