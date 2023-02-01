import Button from 'components/Button';
import Header from 'components/Header';
import { MenuIcon, ProfileIcon } from 'components/Icon';
import { StyledText3 } from 'components/TextField';

function ChatListHeader() {
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
      bgColor="PURPLE"
    />
  );
}

export default ChatListHeader;
