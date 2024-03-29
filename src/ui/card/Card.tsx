import { FC } from "react";
import styles from "./card.module.css";
import { ProductType, ProductsValuesType } from "../../types/products.types";
import Button from "../button/Button";
import { Link } from "react-router-dom";
import { useProducts } from "../../contexts/ProductsContextProvideer";

const Card: FC<{ card: ProductType }> = ({ card }) => {
  const { deleteProduct } = useProducts() as ProductsValuesType;
  return (
    <div className={styles.card}>
      <img src={card.image} alt="card" />
      <h3>Title: {card.title}</h3>
      <h4>Price: {card.price}</h4>
      <p>{card.description}</p>
      <div className={styles.actions}>
        <Link to={`/edit/${card.id}`}>
          <Button>Update</Button>
        </Link>
        <Button onClick={() => deleteProduct(card.id!)} bg="red">
          Delete
        </Button>
      </div>
    </div>
  );
};

export default Card;
