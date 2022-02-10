import { ICharctersObject } from "../../interfaces/interfaces";
import "./CharactersList.scss";

const CharactersList = ({ character }: ICharctersObject) => {
  return (
    <div className="character">
      <h3 className="character__title">{character.name}</h3>
      <div className="character__info">
        <img
          className="character__image"
          src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          alt={character.name}
        ></img>
        <p className="character__description">{character.description}</p>
      </div>
      <button className="character__button">More Info...</button>
    </div>
  );
};

export default CharactersList;
