const getCharacters = async () => {
  const orderCharacters = "name";
  const offset = "0";
  const limit = "50";

  const url: any = process.env.REACT_APP_URL;
  const response = await fetch(
    `${url}&orderBy=${orderCharacters}&offset=${offset}&limit=${limit}`
  );
  const { data } = await response.json();
  const { results } = await data;

  return results;
};

export default getCharacters;
