import React from "react";
import InformationList from "../components/ExerciseInformation/InformationList";
import Header from "../components/Header";
import Inner from "../components/Inner";
import "./ExerciseInformation.scss";

const ExerciseInformation = () => {
  return (
    <React.Fragment>
      <Inner>
        <Header />
      </Inner>
      <Inner>
        <InformationList />
      </Inner>
    </React.Fragment>
  );
};

export default ExerciseInformation;
