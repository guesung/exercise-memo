import React, { useReducer } from "react";
import DiaryContext from "./diary-context";

let dumpList = [
  {
    id: "f1",
    date: "2022-07-20",
    part: "Chest",
    minutes: "45",
    satisfaction: 7,
    review: "유튜브를 듣느라 운동에 온전히 집중을 하지 못함",
  },
  {
    id: "f2",
    date: "2022-07-21",
    part: "Chest",
    minutes: "45",
    satisfaction: 7,
    review: "유튜브를 듣느라 운동에 온전히 집중을 하지 못함",
  },
  {
    id: "f3",
    date: "2022-07-22",
    part: "Chest",
    minutes: "45",
    satisfaction: 7,
    review: "유튜브를 듣느라 운동에 온전히 집중을 하지 못함",
  },
  {
    id: "f4",
    date: "2022-07-23",
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
    date: "2022-07-25",
    part: "Chest",
    minutes: "45",
    satisfaction: 7,
    review: "유튜브를 듣느라 운동에 온전히 집중을 하지 못함",
  },
];
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const newState = [
        ...state,
        {
          id: Math.random(),
          ...action.list,
        },
      ];
      return newState;
    case "DELETE":
      const newStates = state.filter(
        (it) => String(it.id) !== String(action.id)
      );
      return newStates;
    case "EDIT":
      const itIndex = state.findIndex((it) => it.id === action.id);
      let newStatess = [...state];
      console.log(newStatess, itIndex);
      newStatess[itIndex].date = action.value;
      return newStatess;
    default:
      return state;
  }
};

const DiaryProvider = (props) => {
  const [listState, dispatch] = useReducer(reducer, dumpList);

  const addDiaryList = (list) => {
    dispatch({ type: "ADD", list: list });
  };

  const onDelete = (id) => {
    dispatch({ type: "DELETE", id: id });
  };

  const onEditDate = (id, value) => {
    dispatch({ type: "EDIT", id: id, value: value });
  };

  const contextProp = {
    listState,
    addDiaryList,
    onDelete,
    onEditDate,
  };

  return (
    <DiaryContext.Provider value={contextProp}>
      {props.children}
    </DiaryContext.Provider>
  );
};

export default DiaryProvider;
