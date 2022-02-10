import { useState } from "react";

import Header from "./components/Header/Header";
import { UserContext } from "./components/UserContext/UserContext";
import useFetch from "./hooks/useFetch";
import AppRouter from "./router/AppRouter";

function App() {
  const [characterArray, setCharacterArray] = useState([]);

  useFetch(setCharacterArray);

  return (
    <div className="App">
      <Header />
      <UserContext.Provider value={{ characterArray, setCharacterArray }}>
        <AppRouter />
      </UserContext.Provider>
    </div>
  );
}

export default App;
