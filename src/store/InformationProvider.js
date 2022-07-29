import React, { useReducer } from "react";
import InformationContext from "./information-context";

const ExerciseInformationList = [
  {
    id: Math.random(),
    exercisePart: "Chest",
    exerciseType: [
      {
        id: Math.random(),
        exerciseName: "Chest Press",
        photoLink:
          "https://mblogthumb-phinf.pstatic.net/20150402_213/nabuilder_1427979616482YttWd_JPEG/chestpress.jpg?type=w2",
        youtubeLink: "https://www.youtube.com/watch?v=ppPQgmgpafM",
      },
      {
        id: Math.random(),
        exerciseName: "Butterfly Machine",
        photoLink:
          "https://mblogthumb-phinf.pstatic.net/20150402_108/nabuilder_1427980211726hUOz2_JPEG/butterfly.jpg?type=w2",
        youtubeLink: "https://www.youtube.com/watch?v=ZdJ3a6pQzKE",
      },
      {
        id: Math.random(),
        exerciseName: "Cable CrossOver",
        photoLink:
          "https://post-phinf.pstatic.net/MjAxNzA5MTRfMjgw/MDAxNTA1MzY1NDE5MDU4.Ny3LeEE_ySNzzo54QB9uMnbFw3rYTvlU0kXtvS2PDMwg.PCk9e3NytahbRCh8MR8izF4_WikfFjqcIQ3JguwFLb4g.JPEG/po3.jpg?type=w1200",
        youtubeLink: "https://www.youtube.com/watch?v=Il7FXbxd1cY",
      },
    ],
  },
  {
    id: Math.random(),
    exercisePart: "Back",
    exerciseType: [
      {
        id: Math.random(),
        exerciseName: "Sitted Cable Row",
        photoLink: "https://i.ytimg.com/vi/GZbfZ033f74/maxresdefault.jpg",
        youtubeLink: "https://www.youtube.com/watch?v=ISe1ooKcqFw",
      },
      {
        id: Math.random(),
        exerciseName: "Dumbell Pullover",
        photoLink:
          "https://mblogthumb-phinf.pstatic.net/MjAxNzA3MDRfMTky/MDAxNDk5MTYyMDE4Njk3.EXqNwIFoGSaBDUd5bVAaIn6FmAkz9m3M5mPMAb_9eqMg.0L7l0SqUgccFLJ-_Rr_SO2ewe7uvLa3FVVPLMigVuyQg.JPEG.chingyangn/bl6.jpg?type=w800",
        youtubeLink: "https://www.youtube.com/watch?v=-SNHJ3RjoJs",
      },
    ],
  },
  {
    id: Math.random(),
    exercisePart: "Leg",
    exerciseType: [
      {
        id: Math.random(),
        exerciseName: "Leg extension",
        photoLink:
          "https://www.physiotutors.com/wp-content/uploads/2022/01/Seated-Leg-Extension.png",
        youtubeLink: "https://www.youtube.com/watch?v=rIoPAhtMdvw",
      },
      {
        id: Math.random(),
        exerciseName: "Leg Press",
        photoLink:
          "https://www.verywellfit.com/thmb/xpCB8K_4_Xjl8N_UA7wSZBwbLus=/768x432/smart/filters:no_upscale()/50-3498610-Leg-Press-GIF-7e720a89577d456db0bcb5dab2bd5d5f.gif",
        youtubeLink: "https://www.youtube.com/watch?v=PmqkX6Te540",
      },
    ],
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const newExerciseType = {
        id: Math.random(),
        exerciseName: action.typeObject.exerciseName,
        photoLink: action.typeObject.photoLink,
        youtubeLink: action.typeObject.youtubeLink,
      };
      const addExerciseTypeIndex = state.findIndex(
        (it) => it.exercisePart === action.typeObject.exercisePart
      );
      let newAllExerciseType = state;
      newAllExerciseType[addExerciseTypeIndex].exerciseType.push(
        newExerciseType
      );
      return newAllExerciseType;

    default:
      return;
  }
};

const InformationProvider = (props) => {
  const [informationList, dispatch] = useReducer(
    reducer,
    ExerciseInformationList
  );
  const onAddExerciseType = (typeObject) => {
    dispatch({ type: "ADD", typeObject: typeObject });
  };

  const contextProp = {
    informationList: informationList,
    onAddExerciseType: onAddExerciseType,
  };
  return (
    <InformationContext.Provider value={contextProp}>
      {props.children}
    </InformationContext.Provider>
  );
};

export default InformationProvider;
