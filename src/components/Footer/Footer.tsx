import { useContext } from "react";
import { Context } from "../AppContext/AppContext";
import "./Footer.scss";

const Footer = () => {
  const charactersContext = useContext(Context);

  const { offset, setOffset, limit, setLimit }: any = charactersContext;

  const handleNextiusPage = () => {
    setOffset(offset + 20);
    setLimit(limit + 20);
  };

  return (
    <div className="footer">
      <button className="footer__button" onClick={handleNextiusPage}>
        Show More
      </button>
    </div>
  );
};

export default Footer;
