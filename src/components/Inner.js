import React from "react";

const Inner = (props) => {
  return <div className={`Inner ${props.className}`}>{props.children}</div>;
};

export default Inner;
