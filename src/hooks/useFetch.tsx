import { useEffect } from "react";

import getCharacters from "../server/getCharacters";

const useFetch = (
  setCharactersArray: Function,
  orderCharacters: boolean,
  nameCharacter: string
) => {
  useEffect(() => {
    getCharacters(orderCharacters, nameCharacter).then((results) => {
      console.log(nameCharacter);
      setCharactersArray(results);
    });
  }, [setCharactersArray, orderCharacters, nameCharacter]);
};

export default useFetch;
