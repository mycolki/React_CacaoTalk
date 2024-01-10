import { nanoid } from 'nanoid';
import { ChatRoomType, MessageType } from 'types';
import { getChatRoomData } from 'api';
import { formatDateToUTC } from 'utils/manipulateDate';
import { getSession, setSession } from './common';

export async function getChatRoom(roomId?: string) {
  const sessionKey = `roomId:${roomId}`;
  const session = getSession<ChatRoomType>(sessionKey);

  if (session) {
    return session;
  }

  const room = await getChatRoomData(roomId);
  setSession(sessionKey, room);

  return room;
}

export function postMessage(roomId: string, message: Omit<MessageType, 'id' | 'timeStamp'>) {
  return new Promise<MessageType>((resolve, reject) => {
    const sessionKey = `roomId:${roomId}`;
    const session = getSession<ChatRoomType>(sessionKey);

    if (!session) {
      reject(new Error('채팅방 데이터가 존재하지 않습니다.'));
      return;
    }

    const newMessage = { ...message, id: nanoid(), timeStamp: formatDateToUTC() };
    session.messages.push(newMessage);
    setSession(sessionKey, session);

    if (message.type === 'text') {
      resolve(newMessage);
      return;
    }

    setTimeout(() => {
      resolve(newMessage);
    }, 3000);
  });
}

export function putChatRoomUnreadCount(roomId: string) {
  return new Promise<ChatRoomType>((resolve, reject) => {
    const sessionKey = `roomId:${roomId}`;
    const session = getSession<ChatRoomType>(sessionKey);

    if (!session) {
      reject(new Error('채팅방 데이터가 존재하지 않습니다.'));
      return;
    }

    const updatedRoom = { ...session, unreadCount: 0 };
    setSession(sessionKey, updatedRoom);

    resolve(updatedRoom);
  });
}
