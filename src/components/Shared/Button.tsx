import { MouseEventHandler, PropsWithChildren } from 'react';
import styled from '@emotion/styled';

interface ButtonProps {
  type?: 'submit' | 'reset' | 'button';
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  className?: string;
}

function Button({ type = 'button', onClick, disabled = false, className, children }: PropsWithChildren<ButtonProps>) {
  return (
    <Wrapper type={type} onClick={onClick} disabled={disabled} className={className}>
      {children}
    </Wrapper>
  );
}

export default Button;

const Wrapper = styled.button`
  padding: 0;
  border: 0;
  cursor: pointer;
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
  background-color: transparent;
`;
