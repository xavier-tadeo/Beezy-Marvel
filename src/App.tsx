import { useState } from "react";

import Header from "./components/Header/Header";
import { UserContext } from "./components/UserContext/UserContext";
import useFetch from "./hooks/useFetch";
import AppRouter from "./router/AppRouter";
import "./App.scss";

function App() {
  const [charactersArray, setCharactersArray] = useState([]);

  const [orderCharacters, setOrderCharacters] = useState(true);

  const [nameCharacter, setNameCharacter] = useState("");

  const [limit, setLimit] = useState(20);

  const [offset, setOffset] = useState(0);

  useFetch(setCharactersArray, orderCharacters, nameCharacter, limit, offset);

  return (
    <div className="App">
      <Header />
      <UserContext.Provider
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
        <AppRouter />
      </UserContext.Provider>
    </div>
  );
}

export default App;
