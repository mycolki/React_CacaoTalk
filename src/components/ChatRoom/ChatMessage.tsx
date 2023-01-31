import { Message } from 'types';
import { formatDate } from 'utils/manipulateDate';

import HorizontalDivider from 'components/HorizontalDivider';
import Image from 'components/Image';
import MessageField from 'components/MessageField';
import MessageRow from 'components/MessageRow';

interface ChatMessageProps {
  message: Message;
  isUser: boolean;
  isStartMessageOfDay: boolean;
}

function ChatMessage({ message, isUser, isStartMessageOfDay }: ChatMessageProps) {
  const { timeStamp, type, img, text } = message;

  return (
    <>
      {isStartMessageOfDay && <HorizontalDivider text={formatDate(timeStamp, 'YYYY년 M월 DD일')} />}

      <MessageRow align={isUser ? 'right' : 'left'} timeStamp={timeStamp}>
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
