interface Member {
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
