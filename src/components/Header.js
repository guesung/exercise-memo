import React from "react";
import { useNavigate } from "react-router-dom";
import LinkList from "./LinkList";

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
      <LinkList />
    </header>
  );
};

export default React.memo(Header);
