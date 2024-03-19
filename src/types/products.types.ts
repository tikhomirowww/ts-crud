export type StatesType = {
  products: ProductType[];
  oneProduct: ProductType | null;
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
  GET_ONE_PRODUCT = "GET_ONE_PRODUCT",
}

export type ActionType = {
  type: keyof typeof ReducerTypes;
  payload: any;
};

export type ProductsValuesType = {
  products: ProductType[];
  oneProduct: ProductType | null;
  getProducts: () => Promise<void>;
  addProduct: (newProduct: ProductType) => Promise<void>;
  getOneProduct: (id: string) => Promise<void>;
  deleteProduct: (id: number) => Promise<void>;
  editProduct: (id: string, editedProduct: ProductType) => Promise<void>;
};
