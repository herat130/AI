import { Album, albumsFactory } from "../../utils/factories/albumFactory";
import { useFetch } from "../../utils/hooks/fetchData";

const ALBUMS_API = "https://jsonplaceholder.typicode.com/albums";

function Albums() {
  const {
    data: albums,
    isLoading,
    isError,
    error,
  } = useFetch<Album[]>({
    url: ALBUMS_API,
    method: "GET",
  });

  if (isLoading) {
    return <div>Loading.....</div>;
  }

  if (isError) {
    return <div>Error: {error}</div>;
  }

  if (!albums) {
    return <div>No data found</div>;
  }

  if (albums.length <= 0) {
    return <p>Albums not found....</p>;
  }

  return (
    <>
      <h1>List of Albums</h1>
      {albumsFactory(albums).map(({ title, id }) => {
        return (
          <article className="album" key={id}>
            {title}
          </article>
        );
      })}
    </>
  );
}

export default Albums;
