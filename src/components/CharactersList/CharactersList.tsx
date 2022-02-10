import { Link } from "react-router-dom";

import { ICharactersObject } from "../../interfaces/interfaces";
import "./CharactersList.scss";

const CharactersList = ({ character }: ICharactersObject) => {
  return (
    <div className="character">
      <h3 className="character__title">{character.name}</h3>
      <div className="character__info">
        <img
          className="character__image"
          src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          alt={character.name}
        ></img>
        <h5 className="character__title-description">Description</h5>
        {!character.description ? (
          <p className="character__description">Don't have a description</p>
        ) : (
          <p className="character__description">{character.description}</p>
        )}
      </div>
      <Link to={`/${character.id}`}>More Info...</Link>
    </div>
  );
};

export default CharactersList;
