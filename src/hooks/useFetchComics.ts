import { useEffect } from "react";
import getCharactersComics from "../services/getCharactersComics";

const useFetchComics = (id: any, setComicsArray: Function) => {
  useEffect(() => {
    getCharactersComics(id).then((data) => {
      setComicsArray(data);
    });
  }, [id, setComicsArray]);
};

export default useFetchComics;
