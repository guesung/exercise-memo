import React, { useContext, useState } from "react";
import DiaryContext from "../../store/diary-context";
import Modal from "../Modal";
import DiaryItem from "./DiaryItem";
import EditDiary from "./EditDiary";

const DiaryList = () => {
  const ctx = useContext(DiaryContext);
  const handleDeleteButton = (e) => {
    ctx.onDelete(e.target.id);
  };

  return (
    <div className="DiaryList card">
      {ctx.listState.map((diary) => (
        <DiaryItem
          key={diary.id}
          handleDeleteButton={handleDeleteButton}
          diary={diary}
          onEditDate={ctx.onEditDate}
        />
      ))}
    </div>
  );
};

export default DiaryList;
