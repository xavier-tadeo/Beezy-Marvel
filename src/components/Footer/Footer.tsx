import { useContext, useState } from "react";

import { Context } from "../../context/AppContext/AppContext";
import "./Footer.scss";

const Footer = () => {
  const [page, setPage] = useState(1);

  const charactersContext = useContext(Context);

  const { offset, setOffset, charactersArray }: any = charactersContext;

  const handleNextiusPage = () => {
    setPage(page + 1);
    setOffset(offset + 20);
  };

  const handlePreviusPage = () => {
    setPage(page - 1);
    setOffset(offset - 20);
  };

  return (
    <div className="footer">
      {charactersArray.length === 20 && (
        <>
          <button
            className={page === 1 ? "isDisable" : "footer__button"}
            onClick={handlePreviusPage}
          >
            Back Page
          </button>
          <button className="footer__button" onClick={handleNextiusPage}>
            Next Page
          </button>
        </>
      )}
    </div>
  );
};

export default Footer;
