import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";

import getCharacterId from "../../helpers/getCharacterId";
import { UserContext } from "../UserContext/UserContext";
import "./CardCharater.scss";

const CardCharacter = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const userContext = useContext(UserContext);

  const { charactersArray }: any = userContext;

  const characterOne = getCharacterId(id, charactersArray);

  console.log(characterOne);

  const { name, thumbnail, description, comics, series, stories, events } =
    characterOne;

  const handleReturn = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="characterOne">
        <button className="characterOne__button" onClick={handleReturn}>
          Return
        </button>
        <h2 className="characterOne__title">{name}</h2>
        <img
          className="characterOne__image"
          src={`${thumbnail.path}.${thumbnail.extension}`}
          alt={name}
        />
        <p className="characterOne__description">{description}</p>
        <h5 className="characterOne__comics">
          Appears in {comics.available} comics
        </h5>
        <ul>
          {comics.items.map((comic: any) => (
            <li>{comic.name}</li>
          ))}
        </ul>
        <h5 className="characterOne__series">
          Appears in {series.available} series
        </h5>
        <ul>
          {series.items.map((serie: any) => (
            <li>{serie.name}</li>
          ))}
        </ul>
        <h5 className="characterOne__stories">
          Appears in {stories.available} stories
        </h5>
        <ul>
          {stories.items.map((storie: any) => (
            <li>{storie.name}</li>
          ))}
        </ul>
        <h5 className="characterOne__events">
          Appears in {events.available} events
        </h5>
        <ul>
          {events.items.map((event: any) => (
            <li>{event.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default CardCharacter;
