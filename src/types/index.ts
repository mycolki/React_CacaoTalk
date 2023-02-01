export interface Member {
  id: string;
  name: string;
  profileImageUrl: string;
}

export interface ImageType {
  imageUrl: string;
  description: string;
}

export interface Message {
  id: string;
  timeStamp: string;
  sender: Member;
  type: 'text' | 'image';
  text?: string;
  image?: ImageType;
}

export interface Chat {
  roomId: string;
  lastMessage: Message;
  unReadCount: number;
  member: Member;
}

export interface Room {
  roomId: string;
  member: Member;
  messages: Message[];
}
