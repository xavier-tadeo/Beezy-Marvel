import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";

import { AppContext } from "../AppContext/AppContext";
import Sort from "./Sort";

describe("Given a Sort component", () => {
  describe("When it render", () => {
    test("It should rendered a button by text 'Order Characters'", () => {
      render(
        <AppContext>
          <Sort />
        </AppContext>
      );
    });
  });
});
