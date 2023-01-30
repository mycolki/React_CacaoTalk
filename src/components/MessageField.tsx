import { css, SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';
import COLORS from 'style/palette';

import Text from 'components/Text';

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
}

function MessageField({ senderType, message }: ChatMessageProps) {
  return (
    <TextWrapper boxStyle={sender[senderType]}>
      <Text textStyle="textStyle2" color={senderType === 'user' ? 'WHITE' : 'CHARCOAL_GREY2'}>
        {message}
      </Text>
    </TextWrapper>
  );
}

export default MessageField;

const TextWrapper = styled.div<{ boxStyle: SerializedStyles }>`
  max-width: 250px;
  padding: 12px;
  border-radius: 12px;
  ${({ boxStyle }) => boxStyle}
`;
