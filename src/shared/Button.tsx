// src/Button.tsx
import React from 'react';

interface ButtonProps {
  label: string;
  type?:"button" | "submit" | "reset" | undefined;
  styles?:string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick ,styles="",type="button"}) => {
  return <button type={type} className={styles} onClick={onClick}>{label}</button>;
};

export default Button;
