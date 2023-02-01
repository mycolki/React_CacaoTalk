import { css, SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';
import COLORS from 'style/palette';

import { StyledText2 } from './TextField';

const user = css`
  background-color: ${COLORS.PURPLE};
  box-shadow: 0 2px 4px 0 ${COLORS.PURPLE_OPACITY40};
`;

const member = css`
  background-color: ${COLORS.WHITE};
  box-shadow: 0 2px 4px 0 ${COLORS.BLACK_OPACITY10};
`;

const sender = { user, member };
type Sender = keyof typeof sender;

interface ChatMessageProps {
  senderType: Sender;
  message: string;
  className?: string;
}

function TextMessage({ senderType, message, className }: ChatMessageProps) {
  return (
    <Wrapper boxStyle={sender[senderType]} className={className}>
      <StyledText2 color={senderType === 'user' ? 'WHITE' : 'CHARCOAL_GREY2'}>{message}</StyledText2>
    </Wrapper>
  );
}

export default TextMessage;

const Wrapper = styled.div<{ boxStyle: SerializedStyles }>`
  max-width: 250px;
  padding: 12px;
  border-radius: 12px;
  ${({ boxStyle }) => boxStyle}
`;
