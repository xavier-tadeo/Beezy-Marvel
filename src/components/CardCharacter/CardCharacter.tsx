import { useContext } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";

import getCharacterId from "../../helpers/getCharacterId";
import { ICaracteristicsCharacter } from "../../interfaces/interfaces";
import { UserContext } from "../UserContext/UserContext";
import "./CardCharater.scss";

const CardCharacter = () => {
  window.scroll(0, 0);
  const { id } = useParams();
  const navigate = useNavigate();

  const userContext = useContext(UserContext);

  const { charactersArray }: any = userContext;

  const characterOne = getCharacterId(id, charactersArray);

  if (!characterOne) {
    return <Navigate to={"/"} />;
  }

  const { name, thumbnail, description, comics, series, stories, events } =
    characterOne;

  const handleReturn = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="characterOne" onClick={handleReturn}>
        <h2 className="characterOne__title">{name}</h2>
        <div className="characterOne__image-container">
          <img
            className="characterOne__image"
            src={`${thumbnail.path}.${thumbnail.extension}`}
            alt={name}
          />
        </div>

        <div className="characterOne__description">
          <h5 className="characterOne__description-title">Historie</h5>
          <p className="characterOne__description-paragraph">{description}</p>
        </div>
        <div className="characterOne__comics">
          <h5 className="characterOne__comics-title">
            Appears in {comics.available} comics
          </h5>
          <ul className="characterOne__list">
            {comics.items.map(
              (comic: ICaracteristicsCharacter, index: string) => (
                <li className="characterOne__item" key={index}>
                  {comic.name}
                </li>
              )
            )}
          </ul>
        </div>
        <div className="characterOne__series">
          <h5 className="characterOne__series-title">
            Appears in {series.available} series
          </h5>
          <ul className="characterOne__list">
            {series.items.map(
              (serie: ICaracteristicsCharacter, index: string) => (
                <li className="characterOne__item" key={index}>
                  {serie.name}
                </li>
              )
            )}
          </ul>
        </div>
        <div className="characterOne__stories">
          <h5 className="characterOne__stories-title">
            Appears in {stories.available} stories
          </h5>
          <ul className="characterOne__list">
            {stories.items.map(
              (storie: ICaracteristicsCharacter, index: string) => (
                <li className="characterOne__item" key={index}>
                  {storie.name}
                </li>
              )
            )}
          </ul>
        </div>
        <div className="characterOne__events">
          <h5 className="characterOne__events-title">
            Appears in {events.available} events
          </h5>
          <ul className="characterOne__list">
            {events.items.map(
              (event: ICaracteristicsCharacter, index: string) => (
                <li className="characterOne__item" key={index}>
                  {event.name}
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default CardCharacter;
