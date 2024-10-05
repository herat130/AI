import { useEffect, useState } from "react";
// import "./App.css";

// import demo from "ui-library";
import { Button, Paragraph } from "ui-library";
//@ts-expect-error: Unreachable code error
import { fetchData, demo } from "data-layer";
import { Album, albumsFactory } from "./utils/factories/albumFactory";

function Albums() {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // demo();
    const fetchAlbum = async () => {
      debugger;
      try {
        setIsLoading(true);
        const data = await fetchData<Album[]>({
          url: "https://jsonplaceholder.typicode.com/albums",
          method: "get",
        });
        setAlbums(albumsFactory(data));
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    };
    fetchAlbum();
  }, []);

  if (isLoading) {
    return <div>Loading.....</div>;
  }

  if (albums.length <= 0) {
    return <p>Albums not found....</p>;
  }

  return (
    <div>
      {/* <Button label="From Storybook" primary={true} />
      <Paragraph text="here is Paragraph From Storybook" /> */}
      <h1>List of Albums</h1>
      {albums.map(({ title, id }) => {
        return (
          <article className="album" key={id}>
            {title}
          </article>
        );
      })}
    </div>
  );
}

export default Albums;
