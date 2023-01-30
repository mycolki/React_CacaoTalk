import { MouseEventHandler, PropsWithChildren } from 'react';
import styled from '@emotion/styled';
import COLORS from 'style/palette';

interface ButtonProps {
  type?: 'submit' | 'reset' | 'button';
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  bgColor?: keyof typeof COLORS;
}

function Button({ type = 'button', onClick, disabled = false, bgColor, children }: PropsWithChildren<ButtonProps>) {
  return (
    <ButtonWrapper
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={{
        backgroundColor: bgColor ? COLORS[bgColor] : 'transparent',
      }}
    >
      {children}
    </ButtonWrapper>
  );
}

export default Button;

const ButtonWrapper = styled.button`
  padding: 0;
  border: 0;
  cursor: pointer;
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
`;
