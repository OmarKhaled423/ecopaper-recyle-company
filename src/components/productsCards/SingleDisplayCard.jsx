import "./ProductCard.css";

const SingleDisplayCard = ({imgUrl, imgTitle}) => {

  return (
        <div className="product__card">
          <div className="product__card-body">
            <figure className="product__image-wrapper">
              <img
                src={imgUrl}
                alt={imgTitle}
                className="product__image"
              />
            </figure>
            <figcaption className="caption__details">
              <h2 className="caption__text">{imgTitle}</h2>
            </figcaption>
          </div>
        </div>
  
  );
};

export default SingleDisplayCard;
