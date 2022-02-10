import { useEffect } from "react";

import getCharacters from "../server/getCharacters";

const useFetch = (setCharacter: Function) => {
  useEffect(() => {
    getCharacters().then((results) => {
      setCharacter(results);
    });
  }, [setCharacter]);
};

export default useFetch;
