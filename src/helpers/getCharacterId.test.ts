import getCharacterId from "./getCharacterId";

describe("Given a getCharacterId function", () => {
  describe("When it invoke with a 'id' and 'characterArray'", () => {
    test("Then should a return object in array with same id", () => {
      const id = "123";

      const characterArray = [
        { id: 234, name: "thor", description: "Character thor definition" },
        {
          id: 123,
          name: "spiderman",
          description: "Character spiderman definition",
        },
      ];

      const expectObject = getCharacterId(id, characterArray);

      expect(expectObject).toEqual(characterArray[1]);
    });
  });
});
