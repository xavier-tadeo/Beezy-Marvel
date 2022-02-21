import { render, screen } from "@testing-library/react";

import { AppContext } from "../../context/AppContext/AppContext";

import CardCharacter from "./CardCharacter";

describe("Given a CardCharacter component", () => {
  describe("When it render", () => {
    test("Should rendered correctly", () => {
      render(
        <AppContext>
          <CardCharacter />
        </AppContext>
      );

      const buttonSort = screen.getByRole("button", {
        name: "Return",
      });

      expect(buttonSort).toBeInTheDocument();
    });
  });
});
