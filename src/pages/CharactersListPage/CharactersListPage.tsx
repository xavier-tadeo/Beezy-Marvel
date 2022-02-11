import "./CharactersListPage.scss";

import { useContext } from "react";
import CharactersList from "../../components/CharactersList/CharactersList";

import { UserContext } from "../../components/UserContext/UserContext";
import { ICharacters } from "../../interfaces/interfaces";

const CharactersListPage = () => {
  const userContext = useContext(UserContext);

  const { charactersArray }: any = userContext;

  return (
    <div className="container-characters">
      {charactersArray.map((character: ICharacters) => {
        return <CharactersList character={character} key={character.id} />;
      })}
    </div>
  );
};

export default CharactersListPage;
