import { useEffect } from "react";

import getCharacters from "../services/getCharacters";

const useFetch = (
  setCharactersArray: Function,
  orderCharacters: boolean,
  nameCharacter: string,

  offset: number
) => {
  useEffect(() => {
    getCharacters(orderCharacters, nameCharacter, offset).then((results) => {
      setCharactersArray(results);
    });
  }, [setCharactersArray, orderCharacters, nameCharacter, offset]);
};

export default useFetch;
