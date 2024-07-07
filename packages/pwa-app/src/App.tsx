import { useEffect, useState } from "react";
import "./App.css";
// @ts-ignore: Unreachable code error
// import demo from "ui-library";
import { Button, Paragraph, NavBar,Input } from "ui-library";
// @ts-ignore: Unreachable code error
import { fetchData, demo } from "data-layer";

function App() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    demo();
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
      <Paragraph text="here is Paragraph From Storybook" />
      <NavBar />
      <Input />
      <h1>List of Photos</h1>
      {photos.map(() => {
        return (
          <div key={1}>
          {/* <div key={photo?.id}> */}
            {/* <img src={photo?.thumbnailUrl} alt={photo?.title} /> */}
          </div>
        );
      })}
    </>
  );
}

export default App;
