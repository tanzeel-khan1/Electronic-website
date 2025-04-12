import "./watch2.css";
import React, { useState, useEffect } from "react";

function Watch2() {
  const images = [
      "https://api.timehouse.store/public/uploads/slider/sliderImage-1744359727266-361088858.jpg",
      "https://currenwatches.com.pk/cdn/shop/files/Untitled-2_a633f005-d838-41d9-bbc4-441124fbe19f_1500x.jpg?v=1730379911",
      // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0G7vwVKRNB-lsvZBp-cpUeyz2yBcY76OKGg&s",
      "https://nizamwatch.com/cdn/shop/files/Hamza_bhatti_banner_a65b25ab-944a-4225-b32e-3c93534303f3.jpg?v=1732278767&width=3840"
    ];
  
    
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
    
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000); 
  
      return () => clearInterval(interval);
    }, []); 
  return (
    <div>
      <nav className="nav-watch">
      <a href="/">
  <h1>Watch <span>whiz</span></h1>
</a>
   {/* <h1>uytyuyt</h1> */}
      </nav>
      <img src={images[currentImageIndex]} alt="Image Carousel" style={{height:"30rem", width:"100%"
      } } />
    </div>
  );
}

export default Watch2;
