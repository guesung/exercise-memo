import React from "react";

const DiaryContext = React.createContext({
  listState: [],
  addDiaryList: () => {},
});

export default DiaryContext;
