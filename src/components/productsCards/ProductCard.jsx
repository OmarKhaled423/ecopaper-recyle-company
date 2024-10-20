import { Link } from "react-router-dom";
import "./ProductCard.css"
const ProductCard = ({ AllProductsData }) => {
  return (
      <div className="products-card__wrapper">
        {AllProductsData.map((imgObj, ind) => (
          <div className="product__card" key={ind}>
            <div className="product__card-body">
              <figure className="product__image-wrapper">
                <img
                  src={imgObj?.url}
                  alt={imgObj?.imgCaption}
                  className="product__image"
                />
              </figure>
              <figcaption className="caption__details">
                <h2 className="caption__text">{imgObj.imgCaption}</h2>
                <Link to={`/${imgObj?.pagePath}`} className="caption__link">
                  See More
                </Link>
              </figcaption>
            </div>
          </div>
        ))}
      </div>
  );
};


export default ProductCard