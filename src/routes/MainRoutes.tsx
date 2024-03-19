import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import ProductsPage from "../pages/products/ProductsPage";
import AddProduct from "../pages/add/AddProduct";
import EditPage from "../pages/edit/EditPage";

const MainRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductsPage />} />
      <Route path="/add" element={<AddProduct />} />
      <Route path="/edit/:id" element={<EditPage />} />
    </Routes>
  );
};

export default MainRoutes;
