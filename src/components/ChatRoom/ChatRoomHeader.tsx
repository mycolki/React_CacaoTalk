import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { GalleryContext } from 'context/GalleryContext';
import { Button, Header } from 'components/Shared';
import { BackIcon, SearchIcon, UploadIcon } from 'components/Icon';
import { StyledText3 } from 'components/Shared/Texts';

interface ChatRoomHeaderProps {
  otherUser: string;
}

function ChatRoomHeader({ otherUser }: ChatRoomHeaderProps) {
  const navigate = useNavigate();
  const { toggleGallery } = useContext(GalleryContext);

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
      center={<StyledText3 color="WHITE">{otherUser}</StyledText3>}
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
