import { useEffect } from "react";

import getCharacters from "../server/getCharacters";

const useFetch = (setCharactersArray: Function, orderCharacters: boolean) => {
  console.log(orderCharacters);
  useEffect(() => {
    getCharacters(orderCharacters).then((results) => {
      setCharactersArray(results);
    });
  }, [setCharactersArray, orderCharacters]);
};

export default useFetch;
