import React from "react";
import Modal from "../Modal";
import WriteNewDiaryText from "./WriteNewDiaryText";

const WriteNewDiary = (props) => {
  return (
    <div className="WriteNewDiary">
      <Modal handleOut={props.handleOut} />
      <WriteNewDiaryText handleOut={props.handleOut} />
    </div>
  );
};

export default WriteNewDiary;
