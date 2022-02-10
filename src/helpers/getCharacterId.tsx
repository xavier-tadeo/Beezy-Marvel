import { ICharacters } from "../interfaces/interfaces";

const getCharacterId = (id: string, charactersArray: any) => {
  return charactersArray.find(
    (character: ICharacters) => JSON.stringify(character.id) === id
  );
};

export default getCharacterId;
