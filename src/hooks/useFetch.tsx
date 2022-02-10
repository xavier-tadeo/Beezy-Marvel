import { useEffect } from "react";

import getCharacters from "../server/getCharacters";

const useFetch = (setCharacterArray: Function) => {
  useEffect(() => {
    getCharacters().then((results) => {
      setCharacterArray(results);
    });
  }, [setCharacterArray]);
};

export default useFetch;
