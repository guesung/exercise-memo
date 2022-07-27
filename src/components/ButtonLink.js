import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../UI/Button";

const ButtonLink = () => {
  const navigate = useNavigate();
  const handleWriteDiaryButton = () => {
    navigate("/writediary");
  };
  return (
    <div className="ButtonLink">
      <Button className="btn btn--write-diary" onClick={handleWriteDiaryButton}>
        일지 작성
      </Button>
      <Button className="btn btn--information" onClick={handleWriteDiaryButton}>
        운동 정보
      </Button>
      <Button className="btn btn--3" onClick={handleWriteDiaryButton}>
        버튼3
      </Button>
      <Button className="btn btn--4" onClick={handleWriteDiaryButton}>
        버튼4
      </Button>
    </div>
  );
};

export default ButtonLink;
