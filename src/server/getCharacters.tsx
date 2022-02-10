const getCharacters = async () => {
  const url = `http://gateway.marvel.com/v1/public/characters?ts=1&apikey=2693b3abaa3a4e717ff114f9f0e0cf2a&hash=9c289834ae7ecae066cd236742048440`;
  const response = await fetch(url);
  const { data } = await response.json();
  const { results } = await data;

  return results;
};

export default getCharacters;
