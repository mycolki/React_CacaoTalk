import { Fragment } from 'react';
import styled from '@emotion/styled';
import { UserType, MessageType, ImageType } from 'types';
import { useChatsScroll } from 'hooks';
import { formatDate, isSameMinute, isMoreThan1DayApart } from 'utils/manipulateDate';
import COLORS from 'style/palette';
import ImageMessage from '../Message/ImageMessage';
import DateDivider from './DateDivider';
import TextMessage from '../Message/TextMessage';
import Chat from './Chat';

interface ChatsProps {
  messages: MessageType[];
  currentUser: UserType;
  uploadingImage: ImageType | null;
}

function Chats({ messages, currentUser, uploadingImage }: ChatsProps) {
  const ref = useChatsScroll(messages, uploadingImage);

  return (
    <List ref={ref}>
      {messages.map(({ id, user, timeStamp, type, image, text }, i, originMessages) => {
        const prevTimeStamp = originMessages[i - 1]?.timeStamp;
        const nextTimeStamp = originMessages[i + 1]?.timeStamp;
        const isUserMessage = Boolean(user.id === currentUser.id);
        const isFirstMessageOfTheDay = isMoreThan1DayApart(timeStamp, prevTimeStamp);
        const isSendedMessageIn1Minute = isSameMinute(timeStamp, nextTimeStamp);

        return (
          <Fragment key={id}>
            {isFirstMessageOfTheDay && <DateDivider date={formatDate(timeStamp, 'YYYY년 M월 DD일')} />}

            <Chat
              align={isUserMessage ? 'right' : 'left'}
              time={isSendedMessageIn1Minute ? '' : formatDate(timeStamp, 'HH:mm')}
            >
              {type === 'text'
                ? text && (
                    <TextMessage
                      text={text}
                      color={isUserMessage ? 'WHITE' : 'CHARCOAL_GREY2'}
                      bgColor={isUserMessage ? 'PURPLE' : 'WHITE'}
                      boxShadow={
                        isUserMessage
                          ? `0 2px 4px 0 ${COLORS.PURPLE_OPACITY40}`
                          : `0 2px 4px 0 ${COLORS.BLACK_OPACITY10}`
                      }
                    />
                  )
                : image && <ImageMessage image={image} />}
            </Chat>
          </Fragment>
        );
      })}

      {uploadingImage && (
        <Chat align="right">
          <ImageMessage loading image={uploadingImage} />
        </Chat>
      )}
    </List>
  );
}

export default Chats;

const List = styled.ul`
  height: 100%;
  padding: 20px 16px 0 16px;
  overflow-x: hidden;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: transparent;
    border-radius: 10px;
    background-clip: padding-box;
    border: 2px solid transparent;
  }
  &:hover {
    &::-webkit-scrollbar-thumb {
      background-color: ${COLORS.COOL_GREY};
    }
  }
`;
