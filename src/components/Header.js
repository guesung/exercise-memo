import React from "react";
import { useNavigate } from "react-router-dom";
import ButtonLink from "./ButtonLink";

const Header = () => {
  const navigate = useNavigate();
  const handleTitleButton = () => {
    navigate("/");
  };
  return (
    <header className="Header">
      <div className="title" onClick={handleTitleButton}>
        <span className="exerciseIcon material-symbols-outlined">
          fitness_center
        </span>
        <span>WE</span>
      </div>
      <ButtonLink />
    </header>
  );
};

export default Header;
