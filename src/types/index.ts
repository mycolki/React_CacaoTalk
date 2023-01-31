export interface Member {
  id: string;
  name: string;
  profileImageUrl: string;
}

export interface Image {
  imageUrl: string;
  description: string;
}

export interface Message {
  id: string;
  timeStamp: string;
  sender: Member;
  type: 'text' | 'image';
  text?: string;
  image?: Image;
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
