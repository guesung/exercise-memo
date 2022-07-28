import React from "react";

const DiaryContext = React.createContext({
  listState: [],
  addDiaryList: () => {},
  onDelete: () => {},
  onEditDate: () => {},
});

export default DiaryContext;
