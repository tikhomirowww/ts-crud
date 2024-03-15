import { FC, ReactNode, createContext, useContext, useReducer } from "react";
import {
  ActionType,
  ProductsValuesType,
  StatesType,
} from "../types/products.types";
import axios from "axios";

const productsContext = createContext<{} | ProductsValuesType>({});

export const useProducts = () => useContext(productsContext);

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
    const { data } = await axios.get(API);
    console.log(data);
  }

  return (
    <productsContext.Provider value={{ products: state.products, getProducts }}>
      {children}
    </productsContext.Provider>
  );
};

export default ProductsContextProvideer;
