import styled from '@emotion/styled';
import { Member, Message } from 'types';

import Image from 'components/Image';
import MessageField from 'components/MessageField';
import MessageRow from 'components/MessageRow';

function ChatMessages({ messages, user }: { messages: Message[]; user: Member }) {
  return (
    <Messages>
      {messages.map(({ id, sender, timeStamp, type, img, text }) => {
        const isUser = sender.id === user.id;
        const align = isUser ? 'right' : 'left';
        const senderType = isUser ? 'user' : 'member';

        return (
          <MessageRow key={id} align={align} time={timeStamp}>
            {type === 'text' ? (
              <MessageField senderType={senderType} message={text ?? ''} />
            ) : (
              <Image src={img?.imgUrl ?? ''} alt={img?.description ?? ''} size={100} borderRadius="50px" />
            )}
          </MessageRow>
        );
      })}
    </Messages>
  );
}

export default ChatMessages;

const Messages = styled.ul`
  padding: 20px 16px;
`;
