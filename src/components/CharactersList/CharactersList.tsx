import { ICharctersObject } from "../../interfaces/interfaces";

const CharactersList = ({ character }: ICharctersObject) => {
  return (
    <div className="character">
      <h3 className="character__title">{character.name}</h3>
      <p className="character__description">{character.description}</p>
      <img
        className="character__image"
        src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
        alt={character.name}
      ></img>
      <button className="character__button">More Info...</button>
    </div>
  );
};

export default CharactersList;
