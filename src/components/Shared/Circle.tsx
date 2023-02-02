import { PropsWithChildren } from 'react';
import styled from '@emotion/styled';
import COLORS from 'style/palette';

interface CircleProps {
  size: string;
  padding?: string;
  bgColor?: keyof typeof COLORS;
}

function Circle({ size, padding, bgColor = 'WHITE', children }: PropsWithChildren<CircleProps>) {
  return (
    <Wrapper
      style={{
        padding,
        width: size,
        height: size,
        backgroundColor: COLORS[bgColor],
      }}
    >
      {children}
    </Wrapper>
  );
}

export default Circle;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;
