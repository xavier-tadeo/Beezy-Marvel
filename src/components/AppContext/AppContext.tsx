import React, { createContext, ReactChild, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { IContextApp } from "../../interfaces/interfaces";

export const Context = createContext<IContextApp | null>(null);

type AppContextProps = {
  children: ReactChild;
};

export const AppContext = ({ children }: AppContextProps) => {
  const [charactersArray, setCharactersArray] = useState([]);
  const [orderCharacters, setOrderCharacters] = useState(true);
  const [nameCharacter, setNameCharacter] = useState("");
  const [limit, setLimit] = useState(20);
  const [offset, setOffset] = useState(0);
  useFetch(setCharactersArray, orderCharacters, nameCharacter, limit, offset);

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
