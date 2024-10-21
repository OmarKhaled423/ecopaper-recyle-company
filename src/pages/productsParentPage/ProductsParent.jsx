import { Outlet } from "react-router-dom";

const ProductsParent = () => {
  document.title = "Products | Ecopaper Recycle Company";

  return (
    <div>
      <Outlet/>
    </div>
  );
};

export default ProductsParent;
