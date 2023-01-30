import { useState, memo } from 'react';
import styled from '@emotion/styled';
import COLORS from 'style/palette';

import { SendIcon } from './Icon';
import Circle from './Circle';
import Button from './Button';

interface MessageFormProps {
  onSubmit: (message: string) => void;
}

function MessageForm({ onSubmit }: MessageFormProps) {
  const [message, setMessage] = useState('');

  return (
    <Container>
      <Form
        onSubmit={e => {
          e.preventDefault();
          onSubmit(message);
        }}
      >
        <Input value={message} onChange={e => setMessage(e.target.value)} placeholder="메시지를 입력하세요" />
        <Button type="submit" disabled={!message}>
          <Circle size="50px" padding="16px 12px" bgColor="PURPLE">
            <SendIcon />
          </Circle>
        </Button>
      </Form>
    </Container>
  );
}

export default memo(MessageForm);

const Container = styled.div`
  padding: 16px;
`;

const Form = styled.form`
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
  height: 50px;
  padding: 17px 146px 16px 16px;
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
