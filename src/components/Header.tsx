import { ReactNode } from 'react';
import styled from '@emotion/styled';
import COLORS from 'style/palette';

interface HeaderProps {
  left?: ReactNode;
  center: ReactNode;
  right?: ReactNode;
  bgColor?: keyof typeof COLORS;
}

function Header({ left, center, right, bgColor }: HeaderProps) {
  return (
    <Container style={{ backgroundColor: bgColor ? COLORS[bgColor] : undefined }}>
      <div className="column">{left}</div>
      <div className="column">{center}</div>
      <div className="column">{right}</div>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  width: var(--app-width);
  height: var(--header);
  padding: 8px 12px 10px;

  .column {
    display: flex;
    width: 33%;
  }

  & :nth-child(1) {
    justify-content: flex-start;
  }

  & :nth-child(2) {
    justify-content: center;
  }

  & :nth-child(3) {
    justify-content: flex-end;
  }
`;
