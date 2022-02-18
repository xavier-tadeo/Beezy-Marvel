import { useContext, useState } from "react";
import { Navigate, Params, useNavigate, useParams } from "react-router-dom";

import getCharacterId from "../../helpers/getCharacterId";
import { Context } from "../../context/AppContext/AppContext";
import useFetchComics from "../../hooks/useFetchComics";
import { IItems } from "../../interfaces/interfaces";
import "./CardCharater.scss";

const CardCharacter = () => {
  window.scroll(0, 0);
  const { id }: Readonly<Params<string>> = useParams();
  const navigate = useNavigate();

  const [comicsArray, setComicsArray] = useState([]);

  useFetchComics(id, setComicsArray);

  const charactersContext = useContext(Context);
  const { charactersArray }: any = charactersContext;

  const characterOne = getCharacterId(id, charactersArray);
  if (!characterOne) {
    return <Navigate to={"/"} />;
  }

  const { name, thumbnail, description } = characterOne;

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
          <h5 className="characterOne__comics-title">Comics</h5>
          <div className="characterOne__list-comics">
            {comicsArray.map((comic: IItems) => (
              <>
                <p className="characterOne__comics-parraf" key={comic.id}>
                  {comic.title}
                </p>
                <img
                  className="characterOne__comics-image"
                  src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                  alt={comic.title}
                ></img>
              </>
            ))}
          </div>
        </div>
        {/* <div className="characterOne__series">
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
        </div> */}
        {/* <div className="characterOne__stories">
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
        </div> */}
      </div>
    </>
  );
};

export default CardCharacter;
