import React, { useReducer } from "react";
import DiaryContext from "./diary-context";

let dumpList = [
  {
    id: "f1",
    date: "2022-07-24",
    part: "Chest",
    minutes: "45",
    satisfaction: 7,
    review: "유튜브를 듣느라 운동에 온전히 집중을 하지 못함",
  },
  {
    id: "f2",
    date: "2022-07-24",
    part: "Chest",
    minutes: "45",
    satisfaction: 7,
    review: "유튜브를 듣느라 운동에 온전히 집중을 하지 못함",
  },
  {
    id: "f3",
    date: "2022-07-24",
    part: "Chest",
    minutes: "45",
    satisfaction: 7,
    review: "유튜브를 듣느라 운동에 온전히 집중을 하지 못함",
  },
  {
    id: "f4",
    date: "2022-07-24",
    part: "Chest",
    minutes: "45",
    satisfaction: 7,
    review: "유튜브를 듣느라 운동에 온전히 집중을 하지 못함",
  },
  {
    id: "f5",
    date: "2022-07-24",
    part: "Chest",
    minutes: "45",
    satisfaction: 7,
    review: "유튜브를 듣느라 운동에 온전히 집중을 하지 못함",
  },
  {
    id: "f6",
    date: "2022-07-24",
    part: "Chest",
    minutes: "45",
    satisfaction: 7,
    review: "유튜브를 듣느라 운동에 온전히 집중을 하지 못함",
  },
];
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return state;
    case "REMOVE":
      return state;
    default:
      return state;
  }
};

const DiaryProvider = (props) => {
  const [listState, dispatch] = useReducer(reducer, dumpList);

  const addDiaryList = (list) => {
    dispatch({ type: "ADD", value: list });
  };

  const contextProp = {
    listState,
    addDiaryList,
  };

  return (
    <DiaryContext.Provider value={contextProp}>
      {props.children}
    </DiaryContext.Provider>
  );
};

export default DiaryProvider;
