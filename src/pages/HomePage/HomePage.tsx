import Footer from "../../components/Footer/Footer";
import CharactersListPage from "../CharactersListPage/CharactersListPage";
import SortAndFilterPage from "../SortAndFilterPage/SortAndFilterPage";

const HomePage = () => {
  return (
    <div>
      <SortAndFilterPage />
      <CharactersListPage />
      <Footer />
    </div>
  );
};

export default HomePage;
