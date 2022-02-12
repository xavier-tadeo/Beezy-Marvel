const getCharacters = async (orderCharacters: boolean, nameCharacter = "") => {
  let order;
  if (orderCharacters) {
    order = "name";
  } else {
    order = "-name";
  }
  const limit = "20";
  const offset = "0";

  const url: any = process.env.REACT_APP_URL;
  const response = await fetch(
    `${url}&orderBy=${order}&offset=${offset}&limit=${limit}?nameStartsWith=${nameCharacter}`
  );

  const { data } = await response.json();
  const { results } = await data;

  return results;
};

export default getCharacters;
