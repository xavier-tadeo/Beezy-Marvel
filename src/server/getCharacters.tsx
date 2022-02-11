const getCharacters = async (
  orderCharacters: boolean,
  limit = "20",
  offset = "0"
) => {
  let order;
  if (orderCharacters) {
    order = "name";
  } else {
    order = "-name";
  }

  const url: any = process.env.REACT_APP_URL;
  const response = await fetch(
    `${url}&orderBy=${order}&offset=${offset}&limit=${limit}`
  );
  const { data } = await response.json();
  const { results } = await data;

  return results;
};

export default getCharacters;
