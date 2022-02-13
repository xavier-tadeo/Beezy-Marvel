import { useContext, useState } from "react";
import { UserContext } from "../UserContext/UserContext";
import "./Footer.scss";

const Footer = () => {
  const userContext = useContext(UserContext);

  const { offset, setOffset }: any = userContext;

  const [isDisable, setIsDisable] = useState(true);

  const handleNextiusPage = () => {
    setOffset(offset + 20);

    buttonDisable();
  };

  const handlePreviusPage = () => {
    setOffset(offset - 20);

    buttonDisable();
  };
  const buttonDisable = () => {
    setIsDisable(false);
  };

  return (
    <div className="footer">
      <button
        className="footer__button"
        onClick={handlePreviusPage}
        disabled={isDisable}
      >
        Previus
      </button>
      <button className="footer__button" onClick={handleNextiusPage}>
        Next
      </button>
    </div>
  );
};

export default Footer;
