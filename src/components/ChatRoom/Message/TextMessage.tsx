import { memo } from 'react';
import styled from '@emotion/styled';
import COLORS from 'style/palette';
import { StyledText2 } from 'components/Shared/Texts';

type Color = keyof typeof COLORS;
interface ChatMessageProps {
  color: Color;
  bgColor: Color;
  boxShadow: string;
  text: string;
}

function TextMessage({ color, bgColor, boxShadow, text }: ChatMessageProps) {
  return (
    <Wrapper
      style={{
        backgroundColor: COLORS[bgColor],
        boxShadow,
      }}
    >
      <StyledText2 color={color}>{text}</StyledText2>
    </Wrapper>
  );
}

export default memo(TextMessage);

const Wrapper = styled.div`
  min-width: 2.5625rem;
  max-width: 250px;
  padding: 12px;
  border-radius: 12px;
  word-break: break-all;
  text-align: left;
`;
