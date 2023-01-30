import { PropsWithChildren } from 'react';
import styled from '@emotion/styled';
import COLORS from 'style/palette';

import Text from './Text';

type Align = 'left' | 'right';

interface MessageProps {
  bgColor?: keyof typeof COLORS;
  boxShadowColor?: keyof typeof COLORS;
  time: string;
  align?: Align;
}

function Message({
  bgColor = 'WHITE',
  boxShadowColor = 'BLACK_OPACITY10',
  time,
  align = 'right',
  children,
}: PropsWithChildren<MessageProps>) {
  return (
    <Container align={align}>
      <TextWrapper
        style={{
          backgroundColor: COLORS[bgColor],
          boxShadow: COLORS[boxShadowColor],
        }}
      >
        {children}
      </TextWrapper>
      <MessageText color="CHARCOAL_GREY2">{time}</MessageText>
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

const TextWrapper = styled.div`
  max-width: 250px;
  padding: 12px;
  border-radius: 12px;
`;

const MessageText = styled(Text)`
  opacity: 0.4;
  font-size: 0.75rem;
`;
