export interface Member {
  id: string;
  name: string;
  profileImgUrl: string;
}

export interface Chat {
  roomId: string;
  lastMessage: string;
  lastTimeStamp: string;
  unReadCount: number;
  member: Member;
}

interface Image {
  imgUrl: string;
  description: string;
}
export interface Message {
  id: string;
  timeStamp: string;
  type: 'text' | 'image';
  sender: Member;
  text?: string;
  img?: Image;
}

export interface Room {
  roomId: string;
  member: Member;
  messages: Message[];
}
