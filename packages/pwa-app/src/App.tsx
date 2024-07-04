import { useEffect, useState } from "react";
import "./App.css";
// @ts-ignore: Unreachable code error
// import demo from "ui-library";
import { Button, Paragraph } from "ui-library";
// @ts-ignore: Unreachable code error
import { fetchData } from "data-layer";

function App() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    // demo();
    const fetchAlbum = async () => {
      const data = await fetchData({
        url: "https://jsonplaceholder.typicode.com/photos?albumId=1",
        method: "get",
      });
      console.log({ data });
      setPhotos(data);
    };
    fetchAlbum();
  }, []);

  if (photos.length <= 0) {
    return <p>photos loading....</p>;
  }

  return (
    <>
      <Button label="From Storybook" primary={true} />
      <h1>List of Photos</h1>
      <Paragraph label="here is Paragraph" />
      {photos.map((photo) => {
        return (
          <div key={photo?.id}>
            <img src={photo?.thumbnailUrl} alt={photo?.title} />
          </div>
        );
      })}
    </>
  );
}

export default App;
