import { useParams } from "react-router-dom";

export default function Album() {
  const { id } = useParams<{ id: string }>();
  return <div>Album id {id}</div>;
}
