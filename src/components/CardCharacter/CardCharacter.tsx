import { useContext } from "react";
import { useParams } from "react-router-dom";

import getCharacterId from "../../helpers/getCharacterId";
import { UserContext } from "../UserContext/UserContext";

const CardCharacter = () => {
  const { id } = useParams();

  const userContext = useContext(UserContext);

  const { charactersArray }: any = userContext;

  const character = getCharacterId(id, charactersArray);

  return (
    <div>
      <h2>{character.name}</h2>
      <img
        src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
        alt={character.name}
      />
      <p>{character.description}</p>
    </div>
  );
};

export default CardCharacter;
