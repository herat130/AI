import { useParams } from "react-router-dom";
import { useFetch } from "../../utils/hooks/useFetch";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Card, Wrapper } from "../Products/style/Card";

const ALBUM_PHOTOS_API = "https://jsonplaceholder.typicode.com/photos?albumId=";

type Photo = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};
export default function Album() {
  const { id } = useParams<{ id: string }>();
  const {
    data: photos,
    isError,
    isLoading,
    error,
  } = useFetch<Photo[]>({ url: ALBUM_PHOTOS_API + id, method: "GET" });
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error: {error}</div>;
  }
  if (photos == null || (photos || []).length === 0) {
    return <div>No photos found</div>;
  }
  return (
    <Wrapper>
      {photos.map(({ id, title, url }) => {
        return (
          <Card key={id}>
            <LazyLoadImage
              src={url}
              alt={title}
              wrapperClassName="card-image"
              placeholderSrc="https://placehold.co/600x400"
            />
            <h3>{title}</h3>
          </Card>
        );
      })}
    </Wrapper>
  );
}
