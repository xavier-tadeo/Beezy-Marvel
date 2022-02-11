import { Link } from "react-router-dom";

import { ICharactersObject } from "../../interfaces/interfaces";
import "./CharactersList.scss";

const CharactersList = ({ character }: ICharactersObject) => {
  return (
    <div className="character">
      <div className="character__info">
        <h3 className="character__title">{character.name}</h3>

        <h5 className="character__title-description">Description</h5>
        {!character.description ? (
          <p className="character__description">Don't have a description</p>
        ) : (
          <p className="character__description">{character.description}</p>
        )}
        <Link to={`/${character.id}`}>More Info...</Link>
      </div>
      <div className="character__container-image">
        <img
          className="character__image"
          src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          alt={character.name}
        ></img>
      </div>
    </div>
  );
};

export default CharactersList;
