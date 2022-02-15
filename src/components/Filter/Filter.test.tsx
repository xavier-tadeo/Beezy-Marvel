import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { AppContext } from "../../context/AppContext/AppContext";
import Filter from "./Filter";

describe("Given a Filter component", () => {
  describe("When it render", () => {
    test("It should rendered one label and one input, and I do write in input", () => {
      render(
        <AppContext>
          <Filter />
        </AppContext>
      );

      const label = screen.getByLabelText("Write name of Character");
      const input = screen.getByPlaceholderText("Hulk, Thor, Spider ...");
      userEvent.type(input, "Hulk");

      expect(label).toBeInTheDocument();
      expect(input).toBeInTheDocument();
      expect(input).toHaveValue("Hulk");
    });
  });
});
