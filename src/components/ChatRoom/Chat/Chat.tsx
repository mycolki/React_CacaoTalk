import { PropsWithChildren } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { leftChatSlide, rightChatSlide } from 'style/animation';
import COLORS from 'style/palette';
import { Text } from 'components/Shared/Texts';

type Align = 'left' | 'right';

interface ChatProps {
  align: 'left' | 'right';
  time?: string;
}

function Chat({ align, time, children }: PropsWithChildren<ChatProps>) {
  return (
    <Row align={align}>
      {children}
      <SendedTime>{time ?? ''}</SendedTime>
    </Row>
  );
}

export default Chat;

const Right = css`
  right: -20px;
  flex-direction: row-reverse;
  animation-name: ${rightChatSlide};
  animation-duration: 400ms;
`;
const Left = css`
  right: -80px;
  flex-direction: row;
  animation-name: ${leftChatSlide};
  animation-duration: 300ms;
`;

const Row = styled.div<{ align: Align }>`
  position: relative;
  display: flex;
  align-items: flex-end;
  min-height: 2.5625rem;
  margin-bottom: 10px;
  gap: 4px;
  animation-timing-function: ease-out;
  animation-iteration-count: 1;
  animation-fill-mode: both;
  ${props => (props.align === 'right' ? Right : Left)}
`;

const SendedTime = styled(Text)`
  opacity: 0.4;
  font-size: 0.75rem;
  color: ${COLORS.CHARCOAL_GREY2};
`;