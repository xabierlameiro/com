import { render, screen } from "../jest.setup";
import Home from "../pages/index";

describe("Home page", () => {
  it("should render the correct sections", () => {
    render(<Home />);
    expect(screen.getByTestId("header")).toBeInTheDocument();
    expect(screen.getByTestId("main")).toBeInTheDocument();
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });
});
