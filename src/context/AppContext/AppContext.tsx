import { createContext, ReactChild, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { IContextApp } from "../../interfaces/interfaces";

export const Context = createContext<IContextApp | null>(null);

type AppContextProps = {
  children: ReactChild;
};

export const AppContext = ({ children }: AppContextProps) => {
  const [charactersArray, setCharactersArray] = useState([]);
  const [orderCharacters, setOrderCharacters] = useState<boolean>(true);
  const [nameCharacter, setNameCharacter] = useState<string>("");
  const [limit, setLimit] = useState<number>(20);
  const [offset, setOffset] = useState<number>(0);
  useFetch(
    setCharactersArray,
    orderCharacters,
    nameCharacter,
    limit,
    offset
    // charactersArray
  );
  console.log("AAAAAAAAAAAAAAAAAAAaaaa");

  return (
    <Context.Provider
      value={{
        charactersArray,
        setCharactersArray,
        orderCharacters,
        setOrderCharacters,
        nameCharacter,
        setNameCharacter,
        limit,
        setLimit,
        offset,
        setOffset,
      }}
    >
      {children}
    </Context.Provider>
  );
};
