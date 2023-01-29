import { ButtonHTMLAttributes } from 'react';
import styled from '@emotion/styled';
import COLORS from 'style/palette';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  bgColor?: keyof typeof COLORS;
}

function Button({ onClick, children, bgColor, type = 'button', ...rest }: ButtonProps) {
  return (
    <ButtonWrapper type={type} onClick={onClick} bgColor={bgColor ? COLORS[bgColor] : undefined} {...rest}>
      {children}
    </ButtonWrapper>
  );
}

export default Button;

const ButtonWrapper = styled.button<{ bgColor?: string }>`
  border: 0;
  background-color: ${({ bgColor }) => bgColor ?? 'transparent'};
  cursor: pointer;
  pointer-events: ${props => (props.disabled ? 'none' : 'auto')};
`;
