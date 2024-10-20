import SingleDisplayCard from "../../components/productsCards/SingleDisplayCard";
import { WritingPrintingPapers } from "../../database/DataDB";

const WitingPrinting = () => {
  document.title = "Witing & Printing | Ecopaper Recycle Company";

  return (
    <>
      <div className="hero-section writing-printing-paper-page">
        <div className="hero-container">
          <h2>Witing & Printing Papers</h2>
        </div>
      </div>
      <div className="products-card__wrapper">
        {WritingPrintingPapers.map((dataObj, ind) => (
          <SingleDisplayCard
          key={ind}
            imgUrl={dataObj?.url}
            imgTitle={dataObj?.imgTitle}
          />
        ))}
      </div>
    </>
  );
};

export default WitingPrinting;
