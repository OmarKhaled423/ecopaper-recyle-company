import SingleDisplayCard from "../../components/productsCards/SingleDisplayCard";
import { PackgingBoardPapers } from "../../database/DataDB";

const PackagingBoards = () => {
  document.title = "Packaging Boards | Ecopaper Recycle Company";

  return (
    <>
      <div className="hero-section packaging-paper-page">
        <div className="hero-container">
          <h2>Packaging Boards</h2>
        </div>
      </div>
      <div className="products-card__wrapper">
        {PackgingBoardPapers.map((dataObj, ind) => (
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

export default PackagingBoards;
