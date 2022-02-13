import { useEffect } from "react";

import getCharacters from "../server/getCharacters";

const useFetch = (
  setCharactersArray: Function,
  orderCharacters: boolean,
  nameCharacter: string
) => {
  useEffect(() => {
    getCharacters(orderCharacters, nameCharacter).then((results) => {
      setCharactersArray(results);
    });
  }, [setCharactersArray, orderCharacters, nameCharacter]);
};

export default useFetch;
