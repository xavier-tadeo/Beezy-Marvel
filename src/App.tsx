import { useState } from "react";

import Header from "./components/Header/Header";
import { UserContext } from "./components/UserContext/UserContext";
import useFetch from "./hooks/useFetch";
import CharactersListPage from "./pages/CharactersListPage/CharactersListPage";

function App() {
  const [characterArray, setCharacterArray] = useState([]);

  useFetch(setCharacterArray);

  return (
    <div className="App">
      <Header />
      <UserContext.Provider value={{ characterArray, setCharacterArray }}>
        <CharactersListPage />
      </UserContext.Provider>
    </div>
  );
}

export default App;
