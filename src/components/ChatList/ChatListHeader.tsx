import Header from 'components/Header';
import { MenuIcon, ProfileIcon } from 'components/Icon';
import Text from 'components/Text';

function ChatListHeader() {
  return (
    <Header
      left={<MenuIcon />}
      center={
        <Text textStyle="textStyle3" color="WHITE">
          채팅
        </Text>
      }
      right={<ProfileIcon />}
      bgColor="PURPLE"
    />
  );
}

export default ChatListHeader;
