type Album = {
  title: string;
  id: number;
};
function albumsFactory(data: Album[] | null): Album[] {
  if (!data) {
    return [];
  }
  return data.map((item) => {
    return {
      title: item.title,
      id: item.id,
    };
  });
}

export { albumsFactory };
export type { Album };
