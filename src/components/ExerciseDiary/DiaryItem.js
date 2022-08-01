import React, { useEffect, useState } from "react";

const DiaryItem = (props) => {
  const diary = props.diary;

  const [isEdit, setIsEdit] = useState({
    date: false,
    part: false,
    minutes: false,
    satisfaction: false,
    review: false,
  });

  const isAllFalse =
    isEdit.date === false &&
    isEdit.part === false &&
    isEdit.minutes === false &&
    isEdit.satisfaction === false &&
    isEdit.review === false;

  const [editInput, setEditInput] = useState({
    date: diary.date,
    part: diary.part,
    minutes: diary.minutes,
    satisfaction: diary.satisfaction,
    review: diary.review,
  });

  const handleEditInput = (e) => {
    setEditInput({
      ...editInput,
      [e.target.name]: e.target.value,
    });
  };
  /* 수정 시작 */
  const handleEditOn = (e) => {
    setIsEdit({
      ...isEdit,
      [e.target.id]: true,
    });
  };
  /* 수정 종료 */
  const handleEditOff = (e) => {
    props.onEdit(e.target.id, e.target.name, editInput[e.target.name]);
    setIsEdit({
      ...isEdit,
      [e.target.name]: false,
    });
  };
  /* 수정 취소 */
  const handleCancelButton = () => {
    setIsEdit({
      date: false,
      part: false,
      minutes: false,
      satisfaction: false,
      review: false,
    });
  };

  const handleEditAllButton = (e) => {
    props.onEdit(e.target.id, "date", editInput["date"]);
    props.onEdit(e.target.id, "part", editInput["part"]);
    props.onEdit(e.target.id, "minutes", editInput["minutes"]);
    props.onEdit(e.target.id, "satisfaction", editInput["satisfaction"]);
    props.onEdit(e.target.id, "review", editInput["review"]);
    setIsEdit({
      date: false,
      part: false,
      minutes: false,
      satisfaction: false,
      review: false,
    });
  };

  return (
    <div className="DiaryItem">
      <div className="item-title">
        {isEdit.date ? (
          <div className="status--edit">
            <div className="title">
              <input
                id="date"
                name="date"
                type="date"
                defaultValue={editInput.date}
                onChange={handleEditInput}
              />
            </div>
            <button
              onClick={handleEditOff}
              id={diary.id}
              name="date"
              className="btn--edit-complete"
            >
              V
            </button>
          </div>
        ) : (
          <div className="status--show">
            <p id="date" className="title" onClick={handleEditOn}>
              {diary.date}
            </p>
          </div>
        )}
      </div>
      {/* part */}
      <div className="item-body">
        {isEdit.part ? (
          <div className="status--edit">
            <label htmlFor="part" className="title">
              부위
            </label>
            <input
              id="part"
              name="part"
              type="text"
              defaultValue={editInput.part}
              onChange={handleEditInput}
              className="content"
            />
            <button
              onClick={handleEditOff}
              id={diary.id}
              name="part"
              className="btn--edit-complete"
            >
              V
            </button>
          </div>
        ) : (
          <div className="status--show">
            <span className="title">부위</span>
            <span id="part" onClick={handleEditOn} className="content">
              {diary.part}
            </span>
          </div>
        )}
        {/* minutes(시간) */}
        {isEdit.minutes ? (
          <div className="status--edit">
            <label htmlFor="part" className="title">
              시간
            </label>
            <input
              id="minutes"
              name="minutes"
              className="content"
              type="text"
              defaultValue={editInput.minutes}
              onChange={handleEditInput}
            />
            <button
              onClick={handleEditOff}
              id={diary.id}
              name="minutes"
              className="btn--edit-complete"
            >
              V
            </button>
          </div>
        ) : (
          <div className="status--show">
            <span className="title">시간</span>
            <span id="minutes" onClick={handleEditOn} className="content">
              {diary.minutes}
            </span>
          </div>
        )}
        {/* satisfaction */}
        {isEdit.satisfaction ? (
          <div className="input-group status--edit">
            <label htmlFor="part" className="title">
              만족도
            </label>
            <input
              id="satisfaction"
              name="satisfaction"
              className="content"
              type="text"
              defaultValue={editInput.satisfaction}
              onChange={handleEditInput}
            />
            <button
              onClick={handleEditOff}
              id={diary.id}
              name="satisfaction"
              className="btn--edit-complete"
            >
              V
            </button>
          </div>
        ) : (
          <div className="status--show">
            <span className="title">만족도</span>
            <span id="satisfaction" onClick={handleEditOn} className="content">
              {diary.satisfaction}
            </span>
          </div>
        )}
        {/* review */}
        {isEdit.review ? (
          <div className="input-group status--edit">
            <label htmlFor="part" className="title">
              review
            </label>
            <textarea
              id="review"
              name="review"
              className="content"
              defaultValue={editInput.review}
              onChange={handleEditInput}
            />
            <button
              onClick={handleEditOff}
              id={diary.id}
              name="review"
              className="btn--edit-complete"
            >
              V
            </button>
          </div>
        ) : (
          <div className="status--show">
            <span className="title">review</span>
            <span id="review" onClick={handleEditOn} className="content">
              {diary.review}
            </span>
            
          </div>
        )}
      </div>
      <button
      onClick={handleEditAllButton}
        className="btn btn-outline-success btn--complete"
        id={diary.id}
         
      >
        V
      </button>
      {isAllFalse ? (
        <button
          onClick={props.handleDeleteButton}
          className="btn btn-outline-danger btn--out"
          id={diary.id}
        >
          X
        </button>
      ) : (
        <button
          onClick={handleCancelButton}
          className="btn btn-danger btn--out"
          id={diary.id}
        >
          X
        </button>
      )}
    </div>
  );
};

export default React.memo(DiaryItem);
