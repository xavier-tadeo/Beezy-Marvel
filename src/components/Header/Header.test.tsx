import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";

import Header from "./Header";

describe("Given a Header compoenent", () => {
  describe("When it render", () => {
    test("It should rendered a one image to Header", () => {
      const textImage = "Logo to Marvel Studios";

      render(<Header />);
      const textExpect = screen.getByAltText(textImage);

      expect(textExpect).toBeInTheDocument();
    });
  });
});
