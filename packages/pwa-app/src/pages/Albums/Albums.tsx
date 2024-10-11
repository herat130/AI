import { Link } from "react-router-dom";
import { Album, albumsFactory } from "../../utils/factories/albumFactory";
import { useFetch } from "../../utils/hooks/useFetch";
import styled from "styled-components";
import { useState } from "react";

const ALBUMS_API = "https://jsonplaceholder.typicode.com/albums";
// const ALBUM_PHOTOS_API = "https://jsonplaceholder.typicode.com/photos?albumId=";
const PAGE_SIZE = 5;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  .album {
    padding: 1rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    box-shadow: 1px 1px 1px 1px #ddd;
    overflow: hidden;
    cursor: pointer;
    &:hover {
      box-shadow: 2px 2px 2px 2px #ddd;
    }
    a {
      color: #555555;
      text-decoration: underline;
    }
    a:hover {
      color: #000;
    }
  }
`;

const Pagination = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

const PageNumber = styled.div<{ active: boolean }>`
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 4px;
  color: ${({ active }) =>
    active ? "#var(--theme-font-opp-color)" : "var(--theme-font-color)"};
  background-color: ${({ active }) => (active ? "#ddd" : "transparent")};
`;

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

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = albums ? Math.ceil(albums.length / 10) : 0;
  const offset = (currentPage - 1) * PAGE_SIZE;

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
    <Wrapper>
      <h1>List of Albums</h1>

      {albumsFactory(albums)
        .slice(offset, offset + PAGE_SIZE)
        .map(({ title, id }) => {
          return (
            <article className="album" key={id}>
              <Link to={"/album/" + id}>{title}</Link>
            </article>
          );
        })}

      <Pagination>
        <button
          disabled={currentPage === 1}
          onClick={() => {
            if (currentPage > 1) setCurrentPage(currentPage - 1);
          }}
        >
          Prev
        </button>
        {new Array(totalPages).fill(0).map((_, index) => {
          return (
            <PageNumber
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              active={currentPage === index + 1}
            >
              {index + 1}
            </PageNumber>
          );
        })}
        <button
          disabled={currentPage === totalPages}
          onClick={() => {
            if (currentPage < totalPages) setCurrentPage(currentPage + 1);
          }}
        >
          Next
        </button>
      </Pagination>
    </Wrapper>
  );
}

export default Albums;
