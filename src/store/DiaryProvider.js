import React, { useReducer, useState } from "react";
import DiaryContext from "./diary-context";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const newState = state
        ? [
            ...state,
            {
              id: Math.random(),
              ...action.list,
            },
          ]
        : [
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
      const itIndex = state.findIndex(
        (it) => String(it.id) === String(action.id)
      );
      let newStatess = [...state];
      newStatess[itIndex][String(action.property)] = String(action.value);
      return newStatess;
    default:
      return state;
  }
};

const DiaryProvider = (props) => {
  const localList = JSON.parse(localStorage.getItem("localList"));
  const [listState, dispatch] = useReducer(reducer, localList);
  const addDiaryList = (list) => {
    dispatch({ type: "ADD", list: list });
  };

  const onDelete = (id) => {
    dispatch({ type: "DELETE", id: id });
  };

  const onEdit = (id, property, value) => {
    dispatch({ type: "EDIT", id: id, property: property, value: value });
  };

  localStorage.setItem("localList", JSON.stringify(listState));

  useState(() => {}, [listState]);

  const contextProp = {
    listState,
    addDiaryList,
    onDelete,
    onEdit,
  };

  return (
    <DiaryContext.Provider value={contextProp}>
      {props.children}
    </DiaryContext.Provider>
  );
};

export default DiaryProvider;
