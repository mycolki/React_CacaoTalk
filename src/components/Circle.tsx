import { ReactNode } from 'react';
import styled from '@emotion/styled';

import { COLORS } from 'style/palette';

interface CircleProps {
  children: ReactNode;
  size: string;
  padding?: string;
  bgColor: keyof typeof COLORS;
}

function Circle({ children, size, padding, bgColor }: CircleProps) {
  return (
    <Wrapper size={size} padding={padding} bgColor={COLORS[bgColor]}>
      {children}
    </Wrapper>
  );
}

export default Circle;

const Wrapper = styled.div<{ size: string; padding?: string; bgColor?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border-radius: 50%;
  ${({ padding }) => padding && `padding: ${padding}`};
  ${({ bgColor }) => bgColor && `background-color: ${bgColor}`};
`;
