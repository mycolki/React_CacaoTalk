import { Message } from 'types';
import { formatDate } from 'utils/manipulateDate';

import HorizontalDivider from 'components/HorizontalDivider';
import MessageField from 'components/MessageField';
import MessageRow from 'components/MessageRow';
import ImageMessage from 'components/ImageMessage';

interface ChatMessageProps {
  message: Message;
  isUser: boolean;
  isStartOfDay: boolean;
  isSameMinute: boolean;
}

function ChatMessage({ message, isUser, isStartOfDay, isSameMinute }: ChatMessageProps) {
  const { timeStamp, type, image, text } = message;
  const align = isUser ? 'right' : 'left';
  const time = isSameMinute ? '' : formatDate(timeStamp, 'HH:mm');

  return (
    <>
      {isStartOfDay && <HorizontalDivider text={formatDate(timeStamp, 'YYYY년 M월 DD일')} />}

      <MessageRow align={align} time={time}>
        {type === 'text' ? (
          <MessageField senderType={isUser ? 'user' : 'member'} message={text ?? ''} />
        ) : (
          <ImageMessage image={image} />
        )}
      </MessageRow>
    </>
  );
}

export default ChatMessage;
