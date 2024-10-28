import { useState } from "react";

export default function About() {
  // throw new Error('About page issue')
  // multiple boxes with different colors : - scalable
  const [boxArray] = useState(new Array(10).fill(0));

  return (
    <div>
      <h2>This is About page</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "600px",
          height: "500px",
          border: "1px solid #ddd",
        }}
      >
        {boxArray.map((_, index) => (
          <Box
            key={index}
            color={`#${Math.floor(Math.random() * 16777215).toString(16)}`}
            height={150}
            width={Math.random() * 100 + 50}
          />
        ))}
      </div>
    </div>
  );
}

function Box({ color, width = 100, height = 100 }) {
  return <div style={{ background: color, width, height, margin: 10 }}></div>;
}
