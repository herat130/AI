import { Link } from "react-router-dom";
import styled from "styled-components";
import { SunIcon as SunIconDark } from "@heroicons/react/24/solid";
import { SunIcon as SunIconLight } from "@heroicons/react/24/outline";
import { Theme } from "../../utils/context/themeContext";

const HeaderWarapper = styled.header`
  display: flex;
  justify-content: flex-end;
  height: 4rem;
  gap: 1rem;
  width: 100%;
  border-bottom: 1px solid var(--theme-opposite-color);
  align-items: center;
  position: sticky;
  top: 0;
  overflow: hidden;
  background-color: var(--theme-background-color);
`;

type Props = {
  toggleTheme: () => void;
  theme: Theme;
};

export default function Header({ toggleTheme, theme }: Props) {
  return (
    <HeaderWarapper>
      <Link to="/">Home</Link>
      <Link to="/user">Formik Form</Link>
      <Link to="/userhook">Hook form</Link>
      <Link to="/albums">Album</Link>
      <Link to="/about">About</Link>
      <Link to="/products">Products</Link>
      <Link to="/cart">Cart</Link>
      {theme === "light" ? (
        <SunIconDark
          cursor={"pointer"}
          width={26}
          height={26}
          onClick={toggleTheme}
          className="size-6 text-blue-500"
        />
      ) : (
        <SunIconLight
          cursor={"pointer"}
          width={26}
          height={26}
          onClick={toggleTheme}
          className="size-6 text-blue-500"
        />
      )}
    </HeaderWarapper>
  );
}
