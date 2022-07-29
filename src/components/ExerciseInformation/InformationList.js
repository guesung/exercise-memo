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
  const [isAddNewInformation, setIsAddNewInformation] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    ctx.onAddExerciseType({
      exerciseName: "Back Press",
      photoLink: "ss",
      youtubeLink: "dd",
      exercisePart: "Back",
    });
  };
  useEffect(() => {
    console.log(1);
  }, [informationList]);

  const handleAddInformationButton = () => {
    setIsAddNewInformation(true);
  };

  return (
    <div className="InformationList">
      {informationList.map((ExerciseInformation) => (
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
            <select>
              <option></option>
              <option>Chest</option>
              <option>Back</option>
              <option>Leg</option>
            </select>
          </div>
          <div className="input-box">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />
          </div>
          <div className="input-box">
            <label htmlFor="photo">Photo</label>
            <input type="text" id="photo" />
          </div>
          <div className="input-box">
            <label htmlFor="video">Video</label>
            <input type="text" id="video" />
          </div>

          <button type="submit" className="btn btn-outline-success submit--btn">
            Click
          </button>
        </form>
      ) : (
        <button
          className="add-information--btn"
          onClick={handleAddInformationButton}
        >
          <span className="material-symbols-outlined">add_circle</span>
        </button>
      )}
    </div>
  );
};

export default InformationList;
