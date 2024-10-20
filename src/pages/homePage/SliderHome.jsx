import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SingleDisplayCard from "../../components/productsCards/SingleDisplayCard";

export default function SimpleSlider({ data }) {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  /* Randomize array in-place using Durstenfeld shuffle algorithm */
  const shuffleArray = function (arr) {
    const newArr = arr.slice();
    for (let i = newArr.length - 1; i > 0; i--) {
      const rand = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
    }
    return newArr;
  };

  return (
    <div
      className="slider-container"
      style={{ textAlign: "center" }}
      onMouseDown={(e) => {
        e.target.style = "cursor:grabbing";
      }}
      onMouseUp={(e) => {
        e.target.style = "cursor:grab";
      }}
    >
      <Slider {...settings}>
        {shuffleArray(data).map((imgObj, ind) => (
          <SingleDisplayCard
            imgUrl={imgObj?.url}
            imgTitle={imgObj?.imgTitle}
            key={ind}
          />
        ))}
      </Slider>
    </div>
  );
}
