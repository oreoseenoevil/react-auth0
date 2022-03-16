/* eslint-disable react/button-has-type */
import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset';
}

export const Button = ({ children, type = 'button', onClick }: ButtonProps) => {
  return (
    <button type={type} onClick={onClick}>
      {children}
    </button>
  );
};
