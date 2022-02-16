import { useEffect } from "react";
import { ICharactersObject } from "../interfaces/interfaces";

import getCharacters from "../services/getCharacters";

const useFetch = (
  setCharactersArray: Function,
  orderCharacters: boolean,
  nameCharacter: string,
  limit: number,
  offset: number,
  charactersArray: Array<ICharactersObject>
) => {
  useEffect(() => {
    getCharacters(orderCharacters, nameCharacter, limit, offset).then(
      (results) => {
        console.log(results);
        setCharactersArray(charactersArray, [charactersArray, ...results]);
        console.log(charactersArray);
      }
    );
  }, [
    setCharactersArray,
    orderCharacters,
    nameCharacter,
    limit,
    offset,
    charactersArray,
  ]);
};

export default useFetch;
