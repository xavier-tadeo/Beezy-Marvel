import Filter from "../../components/Filter/Filter";
import Sort from "../../components/Sort/Sort";
import "./SortAndFilterPage.scss";

const SortAndFilterPage = () => {
  return (
    <div className="sort-filter-container">
      <Filter />
      <Sort />
    </div>
  );
};

export default SortAndFilterPage;
