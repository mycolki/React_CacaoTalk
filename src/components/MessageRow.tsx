import { PropsWithChildren } from 'react';
import styled from '@emotion/styled';
import { formatDate } from 'utils/manipulateDate';

import Text from './Text';

type Align = 'left' | 'right';

interface MessageProps {
  align: 'left' | 'right';
  timeStamp: string;
}

function MessageRow({ align, timeStamp, children }: PropsWithChildren<MessageProps>) {
  return (
    <MessageWrapper align={align}>
      {children}
      <TimeText color="CHARCOAL_GREY2">{formatDate(timeStamp, 'HH:mm')}</TimeText>
    </MessageWrapper>
  );
}

export default MessageRow;

const MessageWrapper = styled.div<{ align: Align }>`
  display: flex;
  flex-direction: ${({ align }) => (align === 'right' ? 'row-reverse' : 'row')};
  align-items: flex-end;
  min-height: 2.5625rem;
  margin-bottom: 10px;
  gap: 4px;
`;

const TimeText = styled(Text)`
  opacity: 0.4;
  font-size: 0.75rem;
`;
