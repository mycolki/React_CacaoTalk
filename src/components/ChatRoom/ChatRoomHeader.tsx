import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';

import Header from 'components/Header';
import Text from 'components/Text';
import Button from 'components/Button';
import { BackIcon, SearchIcon, UploadIcon } from 'components/Icon';

interface ChatRoomHeaderProps {
  sender: string;
}

function ChatRoomHeader({ sender }: ChatRoomHeaderProps) {
  const navigate = useNavigate();

  return (
    <Header
      left={
        <Button
          onClick={() => {
            navigate(-1);
          }}
        >
          <BackIcon />
        </Button>
      }
      center={
        <Text textStyle="textStyle3" color="WHITE">
          {sender}
        </Text>
      }
      right={
        <Buttons>
          <Button>
            <UploadIcon />
          </Button>
          <Button>
            <SearchIcon />
          </Button>
        </Buttons>
      }
      bgColor="PURPLE"
    />
  );
}

export default ChatRoomHeader;

const Buttons = styled.div`
  display: flex;
  align-items: center;

  button:first-child {
    margin-right: 17px;
  }
`;
