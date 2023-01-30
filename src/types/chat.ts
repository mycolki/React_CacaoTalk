interface Member {
  id: string;
  name: string;
  profileImgUrl: string;
}

export interface Chat {
  roomId: string;
  lastMessage: string;
  lastTimeStamp: string;
  unReadMessageCount: number;
  member: Member;
}
