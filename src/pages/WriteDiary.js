import React, { useState } from "react";
import Header from "../components/Header";
import Inner from "../components/Inner";
import Button from "../UI/Button";
import DiaryList from "../components/ExerciseDiary/DiaryList";
import WriteNewDiary from "../components/ExerciseDiary/WriteNewDiary";

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
      {isWriteNew && <WriteNewDiary handleOut={handleOut} />}
      <Inner>
        <Header />
      </Inner>
      <Inner className="WriteDiary">
        <Button
          className="btn btn--write-new-diary"
          onClick={handleWriteNewDiary}
        >
          새 일지 작성
        </Button>
        <DiaryList />
      </Inner>
    </React.Fragment>
  );
};

export default WriteDiary;
