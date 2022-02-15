import { useContext } from "react";
import { Context } from "../../context/AppContext/AppContext";
import "./Sort.scss";

const Sort = () => {
  const userContext = useContext(Context);

  const { orderCharacters, setOrderCharacters }: any = userContext;

  const handleOrder = () => {
    setOrderCharacters(!orderCharacters);
  };

  return (
    <div className="sort">
      <button className="sort__button" onClick={handleOrder}>
        Order Characters
      </button>
    </div>
  );
};

export default Sort;
