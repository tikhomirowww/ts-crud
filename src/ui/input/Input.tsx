import { FC } from "react";
import { IInput } from "./input.types";

const Input: FC<IInput> = ({ placeholder, value, onChange, type }) => {
  return (
    <input
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      type={type}
    />
  );
};

export default Input;
