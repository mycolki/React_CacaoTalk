import { ReactNode } from 'react';
import styled from '@emotion/styled';
import { COLORS } from 'style/palette';

interface HeaderProps {
  left?: ReactNode;
  center: ReactNode;
  right?: ReactNode;
  bgColor?: keyof typeof COLORS;
}

function Header({ left, center, right, bgColor }: HeaderProps) {
  return (
    <Container bgColor={bgColor ? COLORS[bgColor] : undefined}>
      <Column1>{left}</Column1>
      <Column2>{center}</Column2>
      <Column3>{right}</Column3>
    </Container>
  );
}

export default Header;

const Container = styled.div<{ bgColor?: string }>`
  display: flex;
  align-items: center;
  height: 44px;
  padding: 8px 11px 9px 12px;
  ${({ bgColor }) => bgColor && `background-color:${bgColor}`}
`;

const Column1 = styled.div`
  display: flex;
  width: 33%;
  justify-content: flex-start;
`;

const Column2 = styled.div`
  display: flex;
  width: 33%;
  justify-content: center;
`;

const Column3 = styled.div`
  display: flex;
  width: 33%;
  justify-content: flex-end;
`;
