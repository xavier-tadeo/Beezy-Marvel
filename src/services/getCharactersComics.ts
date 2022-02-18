const getCharactersComics = async (characterId: any) => {
  const url = process.env.REACT_APP_URL_MARVEL;
  const keyApi = process.env.REACT_APP_KEY;

  const response = await fetch(`${url}/${characterId}/comics?${keyApi}`);

  const { data } = await response.json();
  const { results } = await data;

  return results;
};

export default getCharactersComics;
