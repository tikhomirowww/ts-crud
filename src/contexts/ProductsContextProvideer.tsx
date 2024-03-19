import { FC, ReactNode, createContext, useContext, useReducer } from "react";
import {
  ActionType,
  ProductType,
  ProductsValuesType,
  ReducerTypes,
  StatesType,
} from "../types/products.types";
import axios from "axios";
import { type } from "os";

const productsContext = createContext<null | ProductsValuesType>(null);

export const useProducts = () => {
  let context = useContext(productsContext);
  return context;
};

const INIT_STATE: StatesType = {
  products: [],
};

function reducer(state = INIT_STATE, action: ActionType): StatesType {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };
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

  return (
    <productsContext.Provider
      value={{ products: state.products, getProducts, addProduct }}
    >
      {children}
    </productsContext.Provider>
  );
};

export default ProductsContextProvideer;
