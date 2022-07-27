import React, { useState } from "react";

const WriteNewDiaryText = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const [textareaInput, setTextareaInput] = useState("");
  const handleTextarea = (e) => {
    setTextareaInput(e.target.value);
  };
  console.log(textareaInput);
  return (
    <div className="WriteNewDiaryText">
      <form onSubmit={handleSubmit}>
        {/* <input type="date" value={DateTime.now.strftime("%Y-%m-%d")} /> */}
        <input type="number" />
        <input type="number" />
        <textarea onChange={handleTextarea} />
        <div className="btn--box">
          <button className="btn--submit" type="submit">
            제출하기
          </button>
          <button className="btn--out" onClick={props.handleOut}>
            나가기
          </button>
        </div>
      </form>
    </div>
  );
};

export default WriteNewDiaryText;
