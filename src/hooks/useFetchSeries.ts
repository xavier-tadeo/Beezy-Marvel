import { useEffect } from "react";
import getCharactersComics from "../services/getCharactersComics";

const useFetchSeries = (id: any, setSeriesArray: Function) => {
  useEffect(() => {
    getCharactersComics(id).then((data) => setSeriesArray(data));
  }, [id, setSeriesArray]);
};

export default useFetchSeries;
