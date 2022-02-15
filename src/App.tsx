import Header from "./components/Header/Header";
import { AppContext } from "./context/AppContext/AppContext";
import AppRouter from "./router/AppRouter";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <AppContext>
        <AppRouter />
      </AppContext>
    </div>
  );
}

export default App;
