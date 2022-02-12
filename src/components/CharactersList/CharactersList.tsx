import { Link } from "react-router-dom";

import { ICharactersObject } from "../../interfaces/interfaces";
import "./CharactersList.scss";

const CharactersList = ({ character }: ICharactersObject) => {
  return (
    <div className="character">
      <div className="character__info">
        <h3 className="character__title">{character.name}</h3>
        <img
          className="character__image"
          src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          alt={character.name}
        ></img>{" "}
        <Link className="character__link" to={`/${character.id}`}>
          More Info...
        </Link>
      </div>
    </div>
  );
};

export default CharactersList;
