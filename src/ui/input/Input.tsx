import { FC } from "react";
import { IInput } from "./input.types";

const Input: FC<IInput> = ({ placeholder, value, onChange, type, name }) => {
  return (
    <input
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      type={type}
      name={name}
    />
  );
};

export default Input;
