'use client';

// * React
import { memo } from 'react';

// * Types
import { EButton } from '@/types/button.types';

type ButtonProps = {
  type: EButton;
  text: string;
  disabled?: boolean;
  onClick?: () => void;
};
const Button = memo(
  ({ type, text, onClick, disabled = false }: ButtonProps) => {
    return (
      <button type={type} onClick={onClick} disabled={disabled} className="btn">
        <span>{text}</span>
      </button>
    );
  },
);

Button.displayName = 'Button';

export default Button;
