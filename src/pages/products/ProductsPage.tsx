import { FC, useEffect } from "react";
import { useProducts } from "../../contexts/ProductsContextProvideer";
import { ProductsValuesType } from "../../types/products.types";
import Card from "../../ui/card/Card";

const ProductsPage: FC = () => {
  const { products, getProducts } = useProducts() as ProductsValuesType;
  useEffect(() => {
    getProducts();
  }, []);
  console.log(products);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent: "center",
        marginTop: "20px",
      }}
    >
      {products.map((card) => (
        <Card card={card} key={card.id} />
      ))}
    </div>
  );
};

export default ProductsPage;
