import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";

import { AppContext } from "../../context/AppContext/AppContext";
import CharactersList from "./CharactersList";

describe("Given a CharacterList component", () => {
  describe("When it render with a character info", () => {
    describe("It should rendered a 'name' and 'image' of character", () => {
      const character = {
        name: "Hulk",
        thumbnail: {
          path: "https//imageHulk",
          extension: ".jpg",
        },
        description: "History of hulk",
        id: "1221",
      };

      render(
        <AppContext>
          <CharactersList character={character} />
        </AppContext>
      );

      screen.getByText(character.name);
    });
  });
});
