import { MenuIcon, ProfileIcon } from 'components/Icon';
import { Button, Header } from 'components/Shared';
import { StyledText3 } from 'components/Shared/Texts';

function ChatRoomListHeader() {
  return (
    <Header
      left={
        <Button>
          <MenuIcon />
        </Button>
      }
      center={<StyledText3 color="WHITE">채팅</StyledText3>}
      right={
        <Button>
          <ProfileIcon />
        </Button>
      }
    />
  );
}

export default ChatRoomListHeader;
