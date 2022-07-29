import React from "react";

const DiaryContext = React.createContext({
  listState: [],
  addDiaryList: () => {},
  onDelete: () => {},
  onEdit: () => {},
});

export default DiaryContext;
