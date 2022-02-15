import { useContext } from "react";

import { FormElement } from "../../interfaces/interfaces";
import { Context } from "../../context/AppContext/AppContext";
import "./Filter.scss";

const Filter = () => {
  const userContext = useContext(Context);

  const { nameCharacter, setNameCharacter }: any = userContext;

  const onChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setNameCharacter(evt.target.value);
  };

  const onSubmit = (event: FormElement) => {
    event.preventDefault();
  };

  return (
    <form className="filter" onSubmit={onSubmit} autoComplete="off">
      <label htmlFor="name" className="filter__label">
        Write name of Character
      </label>
      <input
        placeholder="Hulk, Thor, Spider ..."
        type="text"
        className="filter__input"
        id="name"
        value={nameCharacter}
        onChange={onChange}
      />
    </form>
  );
};

export default Filter;
