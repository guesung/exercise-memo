import React from "react";
import Modal from "../Modal";
import WriteNewDiaryForm from "./WriteNewDiaryForm";

const WriteNewDiary = (props) => {
  return (
    <div className="WriteNewDiary">
      <Modal handleOut={props.handleOut} />
      <WriteNewDiaryForm handleOut={props.handleOut} />
    </div>
  );
};

export default WriteNewDiary;
