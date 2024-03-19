import { ChangeEvent, FC, FormEvent, useEffect, useState } from "react";
import { ProductType, ProductsValuesType } from "../../types/products.types";
import { useNavigate, useParams } from "react-router-dom";
import Input from "../../ui/input/Input";
import Button from "../../ui/button/Button";
import styles from "./edit.module.css";
import { useProducts } from "../../contexts/ProductsContextProvideer";

const EditPage: FC = () => {
  const { getOneProduct, oneProduct, editProduct } =
    useProducts() as ProductsValuesType;
  const [newProduct, setNewProduct] = useState<ProductType>({
    title: "",
    description: "",
    image: "",
    price: "",
  });

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    const { value, name } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  }

  const { id } = useParams();

  useEffect(() => {
    getOneProduct(id!);
  }, []);

  useEffect(() => {
    oneProduct && setNewProduct(oneProduct);
  }, [oneProduct]);

  const navigate = useNavigate();

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    for (let key in newProduct) {
      if (!newProduct[key]) {
        alert("Some inputs are empty");
        return;
      }
    }
    editProduct(id!, newProduct);
    setNewProduct({
      title: "",
      description: "",
      image: "",
      price: "",
    });
    navigate("/");
  }
  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <h2>Edit Form</h2>
      <Input
        placeholder="Title"
        onChange={onChange}
        name="title"
        type="text"
        value={newProduct.title}
      />
      <Input
        placeholder="Price"
        onChange={onChange}
        name="price"
        type="number"
        value={newProduct.price}
      />
      <Input
        placeholder="Description"
        onChange={onChange}
        name="description"
        type="text"
        value={newProduct.description}
      />
      <Input
        placeholder="Image"
        onChange={onChange}
        name="image"
        type="url"
        value={newProduct.image}
      />
      <Button type="submit">Save changes</Button>
    </form>
  );
};

export default EditPage;
