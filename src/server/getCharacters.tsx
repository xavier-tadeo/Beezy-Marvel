const getCharacters = async () => {
  const url: any = process.env.REACT_APP_URL;
  const response = await fetch(url);
  const { data } = await response.json();
  const { results } = await data;

  return results;
};

export default getCharacters;
