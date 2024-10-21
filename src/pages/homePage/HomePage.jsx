import { Link } from "react-router-dom";
import "./HomePage.css";

import SliderCustom from "../../components/slider/Slider";
import ProductCard from "../../components/productsCards/ProductCard";
import AllProducts, {
  PackgingBoardPapers,
  SpecialityPapers,
  TissuePapers,
  WritingPrintingPapers,
} from "../../database/DataDB";


import image1 from "../../assets/Slider_1.webp";
import image2 from "../../assets/Slider_2.jpg";
import image3 from "../../assets/Slider_3.jpg";
import image4 from "../../assets/Slider_4.webp";
import image5 from "../../assets/Slider_5.png";
import image6 from "../../assets/Slider_6.png";
import SingleDisplayCard from "../../components/productsCards/SingleDisplayCard";
import { useState } from "react";
import SliderHome from "./SliderHome";

const HomePage = () => {
  document.title = "Homepage | Ecopaper Recycle Company";




  const SilderImages = [
    { id: 1, src: image1, caption: "Packaging Board Paper" },
    { id: 2, src: image2, caption: "Colourful Packaging Board Papers" },
    { id: 3, src: image3, caption: "Board Paper" },
    { id: 4, src: image4, caption: "Board Paper Role" },
    { id: 5, src: image5, caption: "Packaging Board Paper" },
    { id: 6, src: image6, caption: "Packaging Board Paper" },
  ];

  const data = [
    ...WritingPrintingPapers,
    ...TissuePapers,
    ...SpecialityPapers,
    ...PackgingBoardPapers,
  ];

  console.log(data);

  const [index, setIndex] = useState(0);
  // const [slidingTime, setSlidingTime] = useState(5000);

  const previousSideHandler = () => {
    index <= 0
      ? setIndex(data.length - 1)
      : setIndex((prevIndex) => prevIndex - 1);
  };
  const nextSideHandler = () => {
    index === data.length - 1
      ? setIndex(0)
      : setIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <div className="homepage_body">
      {/* App Header component */}
      {/* <AppHeader /> */}

      {/* <h1>Home page</h1> */}
      {/* App Slider component*/}
      <SliderCustom images={SilderImages} />

      <div className="wrapper">
        <h2>See our product list</h2>
        <ProductCard AllProductsData={AllProducts} className="product__card" />
      </div>
      <div className="wrapper">
        <h2>Product list</h2>
        {/* <div>
          <button
            style={{ paddingInline: "10px", paddingBlock: "5px" }}
            onClick={nextSideHandler}
          >
            Previous
          </button>

          <button
            style={{ paddingInline: "10px", paddingBlock: "5px" }}
            onClick={nextSideHandler}
          >
            Next
          </button>
        </div> */}
        <div className="products__slider">
          <SliderHome data={data}/>
        </div>
      </div>

      <div className="wellocme-text__container">
        <h2>Welcome to Our Ecopaper Recycle Company</h2>
        <p>
          Ecopaper Recycle Company was established in 2023 by five colleagues
          with a shared vision to create meaningful partnerships instead of
          merely customer transactions. More than 5 years of experience in the
          paper industry, we set out to redefine the traditional buyer-seller
          relationship. We believe that true success comes from helping our
          partners succeed when they win, we win together.
          <Link to="/about-us" className="read-more__btn">
            Read More
          </Link>
        </p>
      </div>
      {/* App Footer component*/}
      {/* <AppFooter /> */}
    </div>
  );
};

export default HomePage;
