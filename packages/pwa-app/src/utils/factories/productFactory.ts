import { Product } from "../context/products/productContext";

function productFactory(products: Product[]): Product[] {
  return products.map((product) => {
    return {
      ...product,
      price: product.price * 2,
    };
  });
}

export { productFactory };
