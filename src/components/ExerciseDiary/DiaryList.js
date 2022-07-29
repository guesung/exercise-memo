import React, { useContext, useState } from "react";
import DiaryContext from "../../store/diary-context";
import DiaryItem from "./DiaryItem";

const DiaryList = () => {
  const todayDate = new Date();

  const ctx = useContext(DiaryContext);
  const handleDeleteButton = (e) => {
    if (window.confirm("정말 제거하시겠습니까?")) {
      ctx.onDelete(e.target.id);
    }
  };

  const handleAddButton = () => {
    ctx.addDiaryList({
      date: `${todayDate.getFullYear()}-${(
        "00" + String(todayDate.getMonth() + 1)
      ).slice(-2)}-${("00" + todayDate.getDate()).slice(-2)}`,
      part: "등",
      minutes: "45",
      satisfaction: "10",
      review: "매우 만족",
    });
  };

  return (
    <div className="DiaryList card">
      {ctx.listState.map((diary) => (
        <DiaryItem
          key={diary.id}
          handleDeleteButton={handleDeleteButton}
          diary={diary}
          onEdit={ctx.onEdit}
        />
      ))}
      <div className="add--button-area">
        <button className="add--button" onClick={handleAddButton}>
          +
        </button>
      </div>
    </div>
  );
};

export default DiaryList;
