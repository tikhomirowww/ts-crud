import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import ProductsPage from "../pages/products/ProductsPage";
import AddProduct from "../pages/add/AddProduct";

const MainRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductsPage />} />
      <Route path="/add" element={<AddProduct />} />
    </Routes>
  );
};

export default MainRoutes;
