/* eslint-disable jsx-a11y/alt-text */
import React, { useContext, useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import InformationItem from "./InformationItem";

import InformationContext from "../../store/information-context";

const InformationList = () => {
  const ctx = useContext(InformationContext);
  const informationList = ctx.informationList;
  const [isAddNewInformation, setIsAddNewInformation] = useState(false);

  // 추가 버튼
  const handleAddInformationButton = () => {
    setIsAddNewInformation(true);
  };
  const handleOutButton = () => {
    setIsAddNewInformation(false);
  };
  // input 관리
  const [inputValue, setInputValue] = useState({
    part: "",
    name: "",
    photoLink: "",
    youtubeLink: "",
  });
  const handleInputValue = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.id]: e.target.value,
    });
  };
  /* 추가 완료 */
  const handleSubmit = (e) => {
    e.preventDefault();
    ctx.onAddExerciseType({
      exercisePart: inputValue.part,
      exerciseName: inputValue.name,
      photoLink: inputValue.photo,
      youtubeLink: inputValue.video,
    });
    setInputValue({
      part: "",
      name: "",
      photoLink: "",
      youtubeLink: "",
    });
    handleOutButton();
  };

  return (
    <div className="InformationList">
      {informationList &&
        informationList.map((ExerciseInformation) => (
          <InformationItem
            key={ExerciseInformation.id}
            exercisePart={ExerciseInformation.exercisePart}
            exerciseType={ExerciseInformation.exerciseType}
          />
        ))}

      {isAddNewInformation ? (
        <form onSubmit={handleSubmit} className="submitForm">
          <div className="input-box">
            <label>Part</label>
            <select
              id="part"
              value={inputValue.part || ""}
              onChange={handleInputValue}
            >
              <option></option>
              <option>Chest</option>
              <option>Back</option>
              <option>Leg</option>
            </select>
          </div>
          <div className="input-box">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={inputValue.name || ""}
              onChange={handleInputValue}
            />
          </div>
          <div className="input-box">
            <label htmlFor="photo">Photo</label>
            <input
              type="text"
              id="photo"
              value={inputValue.photo || ""}
              onChange={handleInputValue}
            />
          </div>
          <div className="input-box">
            <label htmlFor="video">Video</label>
            <input
              type="text"
              id="video"
              value={inputValue.video || ""}
              onChange={handleInputValue}
            />
          </div>

          <button type="submit" className="btn btn-outline-success submit--btn">
            Click
          </button>
          <button
            className="btn btn-outline-danger out--btn"
            onClick={handleOutButton}
          >
            X
          </button>
        </form>
      ) : (
        <div className="add-box">
          <button
            className="btn btn-outline-secondary add-btn"
            onClick={handleAddInformationButton}
          >
            +
          </button>
        </div>
      )}
    </div>
  );
};

export default InformationList;
