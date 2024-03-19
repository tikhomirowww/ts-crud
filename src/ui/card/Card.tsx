import { FC } from "react";
import styles from "./card.module.css";
import { ProductType } from "../../types/products.types";
import Button from "../button/Button";

const Card: FC<{ card: ProductType }> = ({ card }) => {
  return (
    <div className={styles.card}>
      <img src={card.image} alt="card" />
      <h3>Title: {card.title}</h3>
      <h4>Price: {card.price}</h4>
      <p>{card.description}</p>
      <div className={styles.actions}>
        <Button>Update</Button>
        <Button bg="red">Delete</Button>
      </div>
    </div>
  );
};

export default Card;