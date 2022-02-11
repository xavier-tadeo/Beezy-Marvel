import "./Filter.scss";

const Filter = () => {
  return (
    <form className="filter">
      <label htmlFor="filter" className="filter__label">
        Choose a option
      </label>
      <select id="filter" className="filter__select">
        <option value="comics">Comics</option>
        <option value="serie">Series</option>
        <option value="storie">Storie</option>
        <option value="evets">Event</option>
      </select>
    </form>
  );
};

export default Filter;
