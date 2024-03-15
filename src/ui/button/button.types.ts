import { ButtonHTMLAttributes } from "react";

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  className?: string;
  bg?: string;
  onClick?: () => void;
}
