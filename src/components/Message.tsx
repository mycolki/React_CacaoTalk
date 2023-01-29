import { ReactNode } from 'react';
import styled from '@emotion/styled';
import COLORS from 'style/palette';

import Text from './Text';

type Align = 'left' | 'right';

interface MessageProps {
  children: ReactNode;
  bgColor?: keyof typeof COLORS;
  boxShadowColor?: keyof typeof COLORS;
  time: string;
  align?: Align;
}

function Message({
  children,
  bgColor = 'WHITE',
  boxShadowColor = 'BLACK_OPACITY10',
  time,
  align = 'right',
}: MessageProps) {
  return (
    <Container align={align}>
      <TextWrapper bgColor={COLORS[bgColor]} boxShadowColor={COLORS[boxShadowColor]}>
        {children}
      </TextWrapper>
      <Text
        color="CHARCOAL_GREY2"
        style={{
          opacity: '0.4',
          fontSize: '0.75rem',
        }}
      >
        {time}
      </Text>
    </Container>
  );
}

export default Message;

const Container = styled.div<{ align: Align }>`
  display: flex;
  flex-direction: ${({ align }) => (align === 'left' ? 'row' : 'row-reverse')};
  align-items: flex-end;
  min-height: 2.5625rem;
  padding: 12px;
  gap: 4px;
`;

const TextWrapper = styled.div<{ bgColor: string; boxShadowColor: string }>`
  max-width: 250px;
  padding: 12px;
  border-radius: 12px;
  box-shadow: ${({ boxShadowColor }) => `0 2px 4px 0 ${boxShadowColor}`};
  background-color: ${({ bgColor }) => bgColor};
`;
