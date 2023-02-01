import { useState } from 'react';
import styled from '@emotion/styled';
import COLORS from 'style/palette';
import { SendIcon } from '../../Icon';
import { Button, Circle } from '../../Shared';

function MessageForm({ onSubmit }: { onSubmit: (message: string) => void }) {
  const [message, setMessage] = useState('');

  return (
    <Form
      onSubmit={e => {
        e.preventDefault();
        onSubmit(message);
        setMessage('');
      }}
    >
      <Input value={message} onChange={e => setMessage(e.target.value)} placeholder="메시지를 입력하세요" autoFocus />
      <Button type="submit" disabled={!message.trim()}>
        <Circle size="50px" padding="16px 12px" bgColor="PURPLE">
          <SendIcon />
        </Circle>
      </Button>
    </Form>
  );
}

export default MessageForm;

const Form = styled.form`
  height: var(--bottom-message-form);
  padding: 16px 16px 20px 16px;
  background-color: ${COLORS.PALE_GREY};
  display: flex;
  gap: 12px;
  font-size: 0.875rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.12px;
`;

const Input = styled.input`
  width: 281px;
  height: 50px;
  padding: 16px;
  border: 0;
  border-radius: 25px;
  box-shadow: 0 2px 4px 0 ${COLORS.BLACK_OPACITY10};
  background-color: ${COLORS.WHITE};

  :focus {
    outline: none;
  }
  ::placeholder {
    opacity: 0.6;
    color: ${COLORS.BATTLESHIP_GREY};
  }
`;
