import React from "react";

const Modal = (props) => {
  return (
    <div className="Modal" onClick={props.handleOut}>
      {props.children}
    </div>
  );
};

export default Modal;
