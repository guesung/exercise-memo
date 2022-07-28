import React, { useReducer, useState } from "react";

/* 변수 ; 수정 상태 ox, input값 value */
/* useState를 사용하냐 vs usReducer를 사용하냐 */
/* useState ; 함수 1개에 유용 vs useReducer ; 함수 2개 이상에 유용 */
/* 함수 1개만 만들꺼면 굳이 useReducer를? */

const DiaryItem = (props) => {
  const diary = props.diary;

  const [isEditDate, setIsEditDate] = useState(false);
  const [dateState, setDateState] = useState(diary.date);
  const handleDateInput = (e) => {
    setDateState(e.target.value);
  };
  const handleEditDate = (e) => {
    if (isEditDate) {
      /* date 값 변경 */
      props.onEditDate(e.target.id, dateState);
      setIsEditDate(false);
    } else {
      setIsEditDate(true);
    }
  };

  return (
    <div className="DiaryItem" key={diary.id}>
      {isEditDate ? (
        <div className="input-group">
          <label htmlFor="date" className="input-group-text">
            날짜
          </label>
          <input
            id="id"
            name="id"
            className="form-control"
            type="date"
            defaultValue={dateState}
            onChange={handleDateInput}
          />
          <button onClick={handleEditDate} id={diary.id}>
            수정완료
          </button>
        </div>
      ) : (
        <div className="card-header" onClick={handleEditDate} id={diary.id}>
          <p>{diary.date}</p>
        </div>
      )}

      <div className="card-body">
        <p>부위 : {diary.part}</p>
        <p>시간(/m) : {diary.minutes}</p>
        <p>만족도(/10) : {diary.satisfaction}</p>
        <p>Review : {diary.review}</p>
      </div>
      <button
        onClick={props.handleDeleteButton}
        className="btn btn-outline-danger"
        id={diary.id}
      >
        x
      </button>
    </div>
  );
};

export default DiaryItem;
