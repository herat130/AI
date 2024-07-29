import { render, screen } from "@testing-library/react";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";

const mockToggleTheme = jest.fn();
const renderUI = () => {
  return render(
    <BrowserRouter>
      <Header toggleTheme={mockToggleTheme} theme={"light"} />
    </BrowserRouter>
  );
};

describe("Header component", () => {
  it("it should render menu", () => {
    renderUI();
    expect(screen.getByText("Home")).toBeInTheDocument();
  });
});
