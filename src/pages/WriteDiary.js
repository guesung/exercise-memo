import React, { useState } from "react";
import Header from "../components/Header";
import Inner from "../components/Inner";
import DiaryList from "../components/ExerciseDiary/DiaryList";
import WriteNewDiary from "../components/ExerciseDiary/WriteNewDiary";
import "./WriteDiary.scss";

const WriteDiary = () => {
  const [isWriteNew, setIsWriteNew] = useState(false);

  const handleWriteNewDiary = () => {
    setIsWriteNew(true);
  };
  const handleOut = () => {
    setIsWriteNew(false);
  };
  return (
    <React.Fragment>
      <Inner>
        <Header />
      </Inner>
      <Inner className="WriteDiary">
        {isWriteNew && <WriteNewDiary handleOut={handleOut} />}
        <button
          className="btn btn-outline-info btn--write-new-diary"
          onClick={handleWriteNewDiary}
        >
          새 일지 작성
        </button>
        <DiaryList />
      </Inner>
    </React.Fragment>
  );
};

export default WriteDiary;
