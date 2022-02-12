import { useState } from "react";
import { FormElement } from "../../interfaces/interfaces";
import "./Filter.scss";

const Filter = () => {
  const [nameCharacter, setNameCharacter] = useState({ name: "" });

  const onChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setNameCharacter({
      ...nameCharacter,
      [evt.target.id]: evt.target.value,
    });
  };

  const onSubmit = (event: FormElement) => {
    event.preventDefault();
    console.log("holaaaaaa");
  };

  return (
    <form className="filter" onSubmit={onSubmit} autoComplete="off">
      <label htmlFor="name" className="filter__label">
        Write name of Character
      </label>
      <input
        type="text"
        className="filter__input"
        id="name"
        value={nameCharacter.name}
        onChange={onChange}
      />
    </form>
  );
};

export default Filter;
