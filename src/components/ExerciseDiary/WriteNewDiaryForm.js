import React, { useContext, useEffect, useState } from "react";
import DiaryContext from "../../store/diary-context";

const WriteNewDiaryForm = (props) => {
  const ctx = useContext(DiaryContext);
  const todayDate = new Date();
  const [errorMessage, setErrorMessage] = useState(false);

  const [inputData, setInputData] = useState({
    date: `${todayDate.getFullYear()}-${(
      "00" + String(todayDate.getMonth() + 1)
    ).slice(-2)}-${("00" + todayDate.getDate()).slice(-2)}`,
    part: "",
    minutes: "",
    satisfaction: "",
    review: "",
  });

  const handleInput = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    const isFillAll =
      inputData.part.length > 0 &&
      inputData.minutes.length > 0 &&
      inputData.satisfaction.length > 0 &&
      inputData.review.length > 0;
    if (isFillAll) {
      setErrorMessage(false);
    }
  }, [inputData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const isFillAll =
      inputData.part.length > 0 &&
      inputData.minutes.length > 0 &&
      inputData.satisfaction.length > 0 &&
      inputData.review.length > 0;
    /* list를 Provider로 넘기기 */
    if (isFillAll) {
      ctx.addDiaryList({
        date: inputData.date,
        part: inputData.part,
        minutes: inputData.minutes,
        satisfaction: inputData.satisfaction,
        review: inputData.review,
      });
      props.handleOut();
    } else {
      setErrorMessage(true);
    }
  };

  return (
    <div className="WriteNewDiaryForm">
      <form onSubmit={handleSubmit}>
        <div className="input-group date">
          <label className="input-group-text" htmlFor="date">
            날짜
          </label>
          <input
            className="form-control"
            id="date"
            type="date"
            defaultValue={inputData.date}
            name="date"
            onChange={handleInput}
            min="2022-01-01"
          />
        </div>
        <div className="input-group part">
          <label className="input-group-text" htmlFor="part">
            부위
          </label>
          {/*           <input
            className="form-control"
            id="part"
            type="text"
            defaultValue={inputData.part}
            name="part"
            onChange={handleInput}
          /> */}
          <select
            name="part"
            className="form-control"
            id="part"
            type="text"
            defaultValue={inputData.part}
            onChange={handleInput}
          >
            <option value="">부위를 선택해주세요</option>
            <option value="chest">가슴+삼두</option>
            <option value="back">등+이두</option>
            <option value="leg">하체+어깨</option>
          </select>
        </div>
        <div className="input-group minutes">
          <label className="input-group-text" htmlFor="minutes">
            시간(/m)
          </label>
          <input
            className="form-control"
            id="minutes"
            type="number"
            defaultValue={inputData.minutes}
            name="minutes"
            onChange={handleInput}
          />
        </div>
        <div className="input-group satisfaction">
          <label className="input-group-text" htmlFor="satisfaction">
            만족도(/10)
          </label>
          <input
            className="form-control"
            id="satisfaction"
            type="number"
            defaultValue={inputData.satisfaction}
            name="satisfaction"
            onChange={handleInput}
          />
        </div>
        <div className="input-group review">
          <label className="input-group-text" htmlFor="review">
            Review
          </label>
          <textarea
            className="form-control"
            id="review"
            defaultValue={inputData.review}
            name="review"
            onChange={handleInput}
          />
        </div>
        {errorMessage && (
          <div className="error-message">빈칸을 모두 채워주세요</div>
        )}
        <div className="btn--box">
          <button className="btn btn-outline-success" type="submit">
            제출하기
          </button>
          <button className="btn btn-outline-success" onClick={props.handleOut}>
            나가기
          </button>
        </div>
      </form>
    </div>
  );
};

export default WriteNewDiaryForm;
