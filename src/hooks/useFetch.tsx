import { useEffect } from "react";

import getCharacters from "../server/getCharacters";

const useFetch = (setCharactersArray: Function) => {
  useEffect(() => {
    getCharacters().then((results) => {
      setCharactersArray(results);
    });
  }, [setCharactersArray]);
};

export default useFetch;
