const getCharacters = async (
  orderCharacters: boolean,
  nameCharacter = "",
  limit = 20,
  offset = 0
) => {
  let order;

  if (orderCharacters) {
    order = "name";
  } else {
    order = "-name";
  }

  const url = process.env.REACT_APP_URL;
  let response;
  if (nameCharacter === "") {
    response = await fetch(
      `${url}&orderBy=${order}&offset=${offset}&limit=${limit}`
    );
  } else {
    response = await fetch(
      `${url}&orderBy=${order}&offset=${offset}&limit=${limit}&nameStartsWith=${nameCharacter}`
    );
  }

  const { data } = await response.json();
  const { results } = await data;

  return results;
};

export default getCharacters;
