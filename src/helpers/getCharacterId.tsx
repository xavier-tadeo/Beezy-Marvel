import { ICharacters } from "../interfaces/interfaces";

const getCharacterId = (id: any, charactersArray: any) => {
  return charactersArray.find(
    (character: ICharacters) => JSON.stringify(character.id) === id
  );
};

export default getCharacterId;
