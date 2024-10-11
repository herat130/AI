import { useContext } from "react";
import styled from "styled-components";
import {
  Product,
  ProductContext,
} from "../../utils/context/products/productContext";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Button } from "ui-library";
import { CartContext } from "../../utils/context/Cart/cartContext";

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.2rem;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 1px 1px 1px 1px #ddd;
  overflow: hidden;
  cursor: pointer;
  img {
    height: 200px;
    width: 100%;
    object-fit: cover;
    border-radius: 4px;
  }

  h3 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &:hover {
    box-shadow: 2px 2px 2px 2px #ddd;
  }
`;

const CardContent = styled.div`
  flex: 1;
`;

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
              <LazyLoadImage src={image} alt={title} />
              <CardContent>
                <h3>{title}</h3>
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
