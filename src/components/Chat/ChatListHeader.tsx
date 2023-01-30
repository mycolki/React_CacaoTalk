import Button from 'components/Button';
import Header from 'components/Header';
import Text from 'components/Text';
import { MenuIcon, ProfileIcon } from 'components/Icon';

function ChatListHeader() {
  return (
    <Header
      left={
        <Button>
          <MenuIcon />
        </Button>
      }
      center={
        <Text textStyle="textStyle3" color="WHITE">
          채팅
        </Text>
      }
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
