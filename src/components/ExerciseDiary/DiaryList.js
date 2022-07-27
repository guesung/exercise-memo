import React, { useContext } from "react";
import DiaryContext from "../../store/diary-context";

const DiaryList = () => {
  const diaryCtx = useContext(DiaryContext);

  return (
    <div className="DiaryList">
      {diaryCtx.listState.map((diary) => (
        <div className="DiaryItem" key={diary.id}>
          <div className="title">
            <p>{diary.date}</p>
          </div>
          <div className="content">
            <p>부위 : {diary.part}</p>
            <p>시간(/m) : {diary.minutes}</p>
            <p>만족도(/10) : {diary.satisfaction}</p>
            <p>Review : {diary.review}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DiaryList;
