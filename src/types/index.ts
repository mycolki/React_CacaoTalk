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

interface Message {
  id: string;
  timeStamp: string;
  type: 'text' | 'image';
  sender: Member;
  text?: string;
  imgUrl?: string;
}

export interface Room {
  roomId: string;
  member: Member;
  messages: Message[];
}
