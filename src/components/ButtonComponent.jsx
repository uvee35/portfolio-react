import React from "react";
import "./ButtonComponent.css";

const ButtonComponent = ({ children, onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default ButtonComponent;
