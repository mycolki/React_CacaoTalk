import { Message } from 'types';
import { formatDate } from 'utils/manipulateDate';

import HorizontalDivider from 'components/HorizontalDivider';
import TextMessage from 'components/TextMessage';
import TalkLayout from 'components/TalkLayout';
import ImageMessage from 'components/ImageMessage';

interface TalkProps {
  message: Message;
  isUser: boolean;
  isStartOfDay: boolean;
  isSameMinute: boolean;
  className?: string;
}

function Talk({ message, isUser, isStartOfDay, isSameMinute, className }: TalkProps) {
  const { timeStamp, type, image, text } = message;
  const align = isUser ? 'right' : 'left';
  const time = isSameMinute ? '' : formatDate(timeStamp, 'HH:mm');

  return (
    <>
      {isStartOfDay && <HorizontalDivider text={formatDate(timeStamp, 'YYYY년 M월 DD일')} />}

      <TalkLayout align={align} time={time} className={className}>
        {type === 'text' ? (
          <TextMessage senderType={isUser ? 'user' : 'member'} message={text ?? ''} />
        ) : (
          <ImageMessage image={image} />
        )}
      </TalkLayout>
    </>
  );
}

export default Talk;
