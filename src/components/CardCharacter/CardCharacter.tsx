import { useContext, useState } from "react";
import { Navigate, Params, useNavigate, useParams } from "react-router-dom";

import getCharacterId from "../../helpers/getCharacterId";
import { ICaracteristicsCharacter } from "../../interfaces/interfaces";
import { Context } from "../../context/AppContext/AppContext";
import useFetchComics from "../../hooks/useFetchComics";

import "./CardCharater.scss";

const CardCharacter = () => {
  window.scroll(0, 0);
  const { id }: Readonly<Params<string>> = useParams();
  const navigate = useNavigate();

  const [comicsArray, setComicsArray] = useState([]);
  console.log(comicsArray);
  useFetchComics(id, setComicsArray);

  const charactersContext = useContext(Context);
  const { charactersArray }: any = charactersContext;
  console.log(comicsArray);

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
        <button className="characterOne__button">Return</button>
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
            {comicsArray.map((comic: any) => (
              <>
                <p key={comic.id}>{comic.title}</p>
                <img
                  className="character__image"
                  src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                  alt={comic.title}
                ></img>
              </>
            ))}
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
