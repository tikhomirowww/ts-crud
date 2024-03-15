import { FC } from "react";
import { useProducts } from "../../contexts/ProductsContextProvideer";
import { ProductsValuesType } from "../../types/products.types";

const ProductsPage: FC = () => {
  const { products, getProducts } = useProducts() as ProductsValuesType;
  return <div>ProductsPage</div>;
};

export default ProductsPage;
