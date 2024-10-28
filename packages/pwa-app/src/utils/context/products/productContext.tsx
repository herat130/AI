import React, { ReactNode } from "react";
import { useFetch } from "../../hooks/useFetch";

type Product = {
  title: string;
  id: number;
  price: number;
  description: string;
  image: string;
};

type InitialState = {
  products: null | Product[];
  isLoading: boolean;
  isError: boolean;
  error: string;
};

const productsInitialState: InitialState = {
  products: [],
  isLoading: true,
  isError: false,
  error: "",
};

const PRODUCTS_API = "https://fakestoreapi.com/products";

const ProductContext = React.createContext(productsInitialState);

function ProductContextProvider({ children }: { children: ReactNode }) {
  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useFetch<Product[]>({ url: PRODUCTS_API, method: "GET" });

  return (
    <ProductContext.Provider value={{ products, isLoading, isError, error }}>
      {children}
    </ProductContext.Provider>
  );
}

export type { Product };
export { ProductContextProvider, ProductContext };
