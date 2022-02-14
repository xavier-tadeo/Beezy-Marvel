import { useEffect } from "react";

import getCharacters from "../services/getCharacters";

const useFetch = (
  setCharactersArray: Function,
  orderCharacters: boolean,
  nameCharacter: string,
  limit: number,
  offset: number
) => {
  useEffect(() => {
    getCharacters(orderCharacters, nameCharacter, limit, offset).then(
      (results) => {
        setCharactersArray(results);
      }
    );
  }, [setCharactersArray, orderCharacters, nameCharacter, limit, offset]);
};

export default useFetch;
