export type StatesType = {
  products: ProductType[];
};

export type ProductType = {
  title: string;
  price: number | string;
  description: string;
  image: string;
  id?: number;
  [key: string]: string | number | undefined;
};

export enum ReducerTypes {
  GET_PRODUCTS = "GET_PRODUCTS",
}

export type ActionType = {
  type: keyof typeof ReducerTypes;
  payload: any;
};

export type ProductsValuesType = {
  products: ProductType[];
  getProducts: () => Promise<void>;
  addProduct: (newProduct: ProductType) => Promise<void>;
};
