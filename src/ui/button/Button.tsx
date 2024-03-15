import React, { FC } from "react";
import "./button.css";
import { IButton } from "./button.types";

const Button: FC<IButton> = ({ children, className, bg, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: bg }}
      className={`button ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
