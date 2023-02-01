import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { TalkContext } from 'context/Talk';

import Header from 'components/Header';
import Button from 'components/Button';
import { BackIcon, SearchIcon, UploadIcon } from 'components/Icon';
import { StyledText3 } from 'components/TextField';

interface ChatRoomHeaderProps {
  sender: string;
}

function ChatRoomHeader({ sender }: ChatRoomHeaderProps) {
  const { toggleGallery } = useContext(TalkContext);
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
      center={<StyledText3 color="WHITE">{sender}</StyledText3>}
      right={
        <Buttons>
          <Button onClick={toggleGallery}>
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

  button:first-of-type {
    margin-right: 17px;
  }
`;
