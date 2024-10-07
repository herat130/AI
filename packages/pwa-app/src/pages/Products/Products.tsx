import { useContext } from "react";
import styled from "styled-components";
import { ProductContext } from "../../utils/context/products/productContext";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Button } from "ui-library";

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
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
  gap: 1rem;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 1px 1px 1px 1px #ddd;
  height: 400px;
  overflow: hidden;
  img {
    height: 200px;
    width: 100%;
    object-fit: cover;
    border-radius: 4px;
  }
`;

const CardContent = styled.div`
  flex: 1;
`;

export default function Products() {
  const { products, isLoading } = useContext(ProductContext);
  console.log({ products });
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
              <Button backgroundColor="#fff" label="Add to Cart" />
            </Card>
          );
        })}
      </Wrapper>
    </div>
  );
}
