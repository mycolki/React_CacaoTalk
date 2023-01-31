import { Message } from 'types';
import { formatDate } from 'utils/manipulateDate';

import HorizontalDivider from 'components/HorizontalDivider';
import Image from 'components/Image';
import MessageField from 'components/MessageField';
import MessageRow from 'components/MessageRow';

interface ChatMessageProps {
  message: Message;
  isUser: boolean;
  isStartOfDay: boolean;
  isSameMinute: boolean;
}

function ChatMessage({ message, isUser, isStartOfDay, isSameMinute }: ChatMessageProps) {
  const { timeStamp, type, img, text } = message;

  return (
    <>
      {isStartOfDay && <HorizontalDivider text={formatDate(timeStamp, 'YYYY년 M월 DD일')} />}

      <MessageRow align={isUser ? 'right' : 'left'} time={isSameMinute ? '' : formatDate(timeStamp, 'HH:mm')}>
        {type === 'text' ? (
          <MessageField senderType={isUser ? 'user' : 'member'} message={text ?? ''} />
        ) : (
          <Image src={img?.imgUrl ?? ''} alt={img?.description ?? ''} size={100} borderRadius="50px" />
        )}
      </MessageRow>
    </>
  );
}

export default ChatMessage;
