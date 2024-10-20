import React, { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import "./Slider.css";

const Slider = ({ images }) => {
  const [index, setIndex] = useState(0);
  const [slidingTime, setSlidingTime] = useState(5000);

  const previousSideHandler = () => {
    index <= 0
      ? setIndex(images.length-1)
      : setIndex((prevIndex) => prevIndex - 1);
  };
  const nextSideHandler = () => {
    index === images.length-1
      ? setIndex(0)
      : setIndex((prevIndex) => prevIndex + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, slidingTime);
    return () => clearInterval(interval);
  }, [images, index]);

  return (
    <div className="slider_container">
      <div className="arrow-button__container">
        <button
          className="left__arrow-button"
          onClick={previousSideHandler}
          title="Previous Side Image"
        >
          <FaArrowLeft />
        </button>
        <button
          className="left__arrow-button"
          onClick={nextSideHandler}
          title="Next Side Image"
        >
          <FaArrowRight />
        </button>
      </div>

      <div className="slider">
        {images.map((image, i) => (
          <div
            className={`slide ${i === index ? "active" : ""}`}
            key={image.id}
          >
            <img src={image.src} alt={image.caption} />
            <p className="image-caption">{image.caption}</p>
          </div>
        ))}
      </div>
      <div className="dots">
        {images.map((_, i) => (
          <div
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => {
              setIndex(i);
              // clearInterval(interval);
            }}
            key={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
