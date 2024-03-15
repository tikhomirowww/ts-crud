export type StatesType = {
  products: ProductType[];
};

export type ProductType = {
  title: string;
  price: number;
  description: string;
  image: string;
};

export type ActionType = {
  type: "GET_PRODUCTS";
  payload: any;
};

export type ProductsValuesType = {
  products: ProductType[];
  getProducts: () => Promise<void>;
};
