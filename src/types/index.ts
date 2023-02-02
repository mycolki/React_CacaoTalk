export interface UserType {
  id: string;
  name: string;
  profileImageUrl: string;
}

export interface ImageType {
  imageUrl: string;
  description: string;
}

export interface MessageType {
  id: string;
  timeStamp: string;
  user: UserType;
  type: 'text' | 'image';
  text?: string;
  image?: ImageType;
}

export interface ChatRoomListItemType {
  roomId: string;
  lastMessage: MessageType;
  unreadCount: number;
  otherUser: UserType;
}
export type ChatRoomListType = ChatRoomListItemType[];

export interface ChatRoomType {
  roomId: string;
  messages: MessageType[];
  unreadCount: number;
  otherUser: UserType;
}
