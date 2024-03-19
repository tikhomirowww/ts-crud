import { FC, ReactNode, createContext, useContext, useReducer } from "react";
import {
  ActionType,
  ProductType,
  ProductsValuesType,
  StatesType,
} from "../types/products.types";
import axios from "axios";

const productsContext = createContext<null | ProductsValuesType>(null);

export const useProducts = () => {
  let context = useContext(productsContext);
  return context;
};

const INIT_STATE: StatesType = {
  products: [],
  oneProduct: null,
};

function reducer(state = INIT_STATE, action: ActionType): StatesType {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };
    case "GET_ONE_PRODUCT":
      return { ...state, oneProduct: action.payload };
    default:
      return state;
  }
}

type ProviderType = {
  children: ReactNode;
};

const ProductsContextProvideer: FC<ProviderType> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const API = "http://localhost:8005/products";

  async function getProducts(): Promise<void> {
    const { data } = await axios.get<ProductType[]>(API);
    dispatch({ type: "GET_PRODUCTS", payload: data });
  }

  async function addProduct(newProduct: ProductType): Promise<void> {
    await axios.post(API, newProduct);
    getProducts();
  }

  async function getOneProduct(id: string) {
    const { data } = await axios.get<ProductType>(`${API}/${id}`);
    dispatch({
      type: "GET_ONE_PRODUCT",
      payload: data,
    });
  }

  async function editProduct(id: string, editedProduct: ProductType) {
    await axios.patch(`${API}/${id}`, editedProduct);
    getProducts();
  }

  async function deleteProduct(id: number) {
    await axios.delete(`${API}/${id}`);
    getProducts();
  }

  return (
    <productsContext.Provider
      value={{
        products: state.products,
        oneProduct: state.oneProduct,
        getProducts,
        addProduct,
        getOneProduct,
        editProduct,
        deleteProduct,
      }}
    >
      {children}
    </productsContext.Provider>
  );
};

export default ProductsContextProvideer;
