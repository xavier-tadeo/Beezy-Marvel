import { useContext } from "react";

import CharactersList from "../../components/CharactersList/CharactersList";
import { Context } from "../../components/AppContext/AppContext";
import { ICharacters } from "../../interfaces/interfaces";
import Spinner from "../../components/Spinner/Spinner";
import "./CharactersListPage.scss";

const CharactersListPage = () => {
  const userContext = useContext(Context);

  const { charactersArray }: any = userContext;

  return (
    <div className="container-characters">
      {charactersArray.length === 0 && <Spinner />}
      {charactersArray.map((character: ICharacters) => {
        return <CharactersList character={character} key={character.id} />;
      })}
    </div>
  );
};

export default CharactersListPage;
