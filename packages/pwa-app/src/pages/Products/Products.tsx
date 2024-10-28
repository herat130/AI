import { useContext } from "react";
import {
  Product,
  ProductContext,
} from "../../utils/context/products/productContext";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Button } from "ui-library";
import { CartContext } from "../../utils/context/Cart/cartContext";
import { Card, CardContent, Wrapper } from "./style/Card";
import { Link } from "react-router-dom";

export default function Products() {
  const { products, isLoading } = useContext(ProductContext);
  const { cartState, dispatch } = useContext(CartContext);
  console.log({ products, cartState });

  const handleAddToCart =
    ({ id, price }: Pick<Product, "id" | "price">) =>
    () => {
      dispatch({
        type: "ADD_TO_CART",
        payload: { product: { id, price }, quantity: 1 },
      });
      dispatch({ type: "CALCULATE_TOTAL", payload: { price } });
    };

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (!products) {
    return <h2>No products...</h2>;
  }
  if (products && products.length === 0) {
    return <h2>No products available</h2>;
  }
  return (
    <div>
      <h2>List of products</h2>
      <Wrapper>
        {products.map(({ id, image, title, description, price }) => {
          return (
            <Card key={id}>
              <Link to={`/product/${id}`} key={id}>
                <LazyLoadImage src={image} alt={title} />
              </Link>
              <CardContent>
                <Link to={`/product/${id}`} key={id}>
                  <h3>{title}</h3>
                </Link>
                <p>{description.slice(0, 20)}</p>
                <p>
                  <b>{price}</b>
                </p>
              </CardContent>
              <Button
                onClick={handleAddToCart({ id, price })}
                backgroundColor="#fff"
                label="Add to Cart"
              />
            </Card>
          );
        })}
      </Wrapper>
    </div>
  );
}
