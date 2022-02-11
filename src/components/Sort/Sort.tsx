import { useContext } from "react";
import { UserContext } from "../UserContext/UserContext";
import "./Sort.scss";

const Sort = () => {
  const userContext = useContext(UserContext);

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
