import { useContext } from "react";
import { UserContext } from "../Admin__pages/AdminPage";

const SubscribersData = () => {
  const { product } = useContext(UserContext);
  const [ProductData, LoadingProductData] = product;

  return (
    <>
      <div>
        <h1 style={{ fontSize: "18px", paddingBlock: "10px", fontWeight: 600 }}>
          Products
        </h1>
        {LoadingProductData ? (
          ProductData.length > 0 ? (
            <table style={{ width: "100%", borderCollapse: "separate" }}>
              <thead>
                <tr>
                  <th
                    style={{
                      background: "#000",
                      color: "#fff",
                      textAlign: "left",
                      padding: "8px 1rem",
                      fontWeight: 400,
                    }}
                  >
                    Image
                  </th>

                  <th
                    style={{
                      background: "#000",
                      color: "#fff",
                      textAlign: "left",
                      padding: "8px 1rem",
                      fontWeight: 400,
                    }}
                  >
                    Title
                  </th>
                  <th
                    style={{
                      background: "#000",
                      color: "#fff",
                      textAlign: "left",
                      padding: "8px 1rem",
                      fontWeight: 400,
                    }}
                  >
                    Description
                  </th>
                  <th
                    style={{
                      background: "#000",
                      color: "#fff",
                      textAlign: "left",
                      padding: "8px 1rem",
                      fontWeight: 400,
                    }}
                  >
                    Price ($)
                  </th>
                  <th
                    style={{
                      background: "#000",
                      color: "#fff",
                      textAlign: "left",
                      padding: "8px 1rem",
                      fontWeight: 400,
                    }}
                  >
                    Old Price ($)
                  </th>
                  <th
                    style={{
                      background: "#000",
                      color: "#fff",
                      textAlign: "left",
                      padding: "8px 1rem",
                      fontWeight: 400,
                    }}
                  >
                    Discount (%)
                  </th>
                </tr>
              </thead>
              {ProductData.map((productObj, ind) => (
                <tbody>
                  <tr key={ind}>
                    <td
                      style={{
                        background: "#ddd",
                        color: "#000",
                        fontWeight: 400,
                        width: "60px",
                        height: "60px",
                        objectFit: "contain",
                        objectPosition: "center",
                      }}
                      rowSpan="2"
                    >
                      <img
                        style={{
                          width: "100%",
                          height: "100%",
                          display: "block",
                        }}
                        src={productObj.imgSrc}
                        alt="product image"
                      />
                    </td>

                    <td
                      style={{
                        background: "#ddd",
                        color: "#000",
                        padding: "8px 1rem",
                        fontWeight: 400,
                      }}
                    >
                      {productObj.title}
                    </td>

                    <td
                      style={{
                        background: "#ddd",
                        color: "#000",
                        padding: "8px 1rem",
                        fontWeight: 400,
                      }}
                    >
                      {productObj.description || "N/A"}
                    </td>

                    <td
                      style={{
                        background: "#ddd",
                        color: "#000",
                        padding: "8px 1rem",
                        fontWeight: 400,
                      }}
                    ><span style={{fontWeight:600,color:"#000000", fontSize:"18px"}}>$ </span>
                      {productObj.price}
                    </td>

                    <td
                      style={{
                        background: "#ddd",
                        color: "#000",
                        padding: "8px 1rem",
                        fontWeight: 400,
                      }}
                    ><span style={{fontWeight:600,color:"#000000", fontSize:"18px"}}>$ </span>
                      {productObj.oldPrice}
                    </td>
                    <td
                      style={{
                        background: "#ddd",
                        color: "#000",
                        padding: "8px 1rem",
                        fontWeight: 400,
                      }}
                      >
                      {((productObj.oldPrice - productObj.price)/productObj.oldPrice*100).toFixed(2)}
                      <span style={{fontWeight:600,color:"#000000", fontSize:"18px"}}>%</span>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          ) : (
            <div
              style={{
                background: "#000",
                paddingBlock: "10px",
                color: "#fff",
                textAlign: "center",
                fontSize: "1rem",
              }}
            >
              No data exist
            </div>
          )
        ) : (
          <div
            style={{
              background: "#000",
              paddingBlock: "10px",
              color: "#fff",
              textAlign: "center",
              fontSize: "1rem",
            }}
          >
            User data is loading...
          </div>
        )}
      </div>
    </>
  );
};

export default SubscribersData;
