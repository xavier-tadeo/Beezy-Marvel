import "./Filter.scss";

const Filter = () => {
  return (
    <form className="filter">
      <label htmlFor="filter" className="filter__label">
        Write name of Character
      </label>
      <input type="text" className="filter__input" id="filter" />
    </form>
  );
};

export default Filter;
