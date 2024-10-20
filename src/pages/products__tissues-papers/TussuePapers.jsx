import { TissuePapers } from "../../database/DataDB";
import SingleDisplayCard from "../../components/productsCards/SingleDisplayCard"
const TussuePapers = () => {
  document.title = "Tissue Papers | Ecopaper Recycle Company";

  return (
    <>
      <div className="hero-section tissue-paper-page">
        <div className="hero-container">
          <h2>Tissues Papers</h2>
        </div>
      </div>
      <div className="products-card__wrapper">
        {TissuePapers.map((dataObj, ind) => (
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

export default TussuePapers;
