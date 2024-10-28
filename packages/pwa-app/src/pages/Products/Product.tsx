import { useContext } from "react";
import { ProductContext } from "../../utils/context/products/productContext";
import { useParams } from "react-router-dom";

export default function Product() {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const product = products?.find((product) => product.id === Number(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} />
      <p>{product.description}</p>
      <p>{product.price}</p>
    </div>
  );
}
