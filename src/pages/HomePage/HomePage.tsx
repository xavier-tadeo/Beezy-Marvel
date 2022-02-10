import CharactersListPage from "../CharactersListPage/CharactersListPage";
import SortAndFilterPage from "../SortAndFilterPage/SortAndFilterPage";

const HomePage = () => {
  return (
    <div>
      <SortAndFilterPage />
      <CharactersListPage />
    </div>
  );
};

export default HomePage;
