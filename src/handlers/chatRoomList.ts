import produce from 'immer';
import { orderBy } from 'lodash-es';
import { getChatRoomListData } from 'api';
import { ChatRoomListType, MessageType } from 'types';
import { getSession, setSession } from './common';

const sessionKey = 'chatRoomList';

export async function getChatRoomList() {
  const session = getSession<ChatRoomListType>(sessionKey);

  if (session) {
    return session;
  }

  const chatRoomList = await getChatRoomListData();
  setSession(sessionKey, chatRoomList);

  return chatRoomList;
}

export function putChatRoomListunreadCount(roomId: string) {
  return new Promise<ChatRoomListType>((resolve, reject) => {
    const session = getSession<ChatRoomListType>(sessionKey);

    if (!session) {
      reject(new Error('채팅목록 데이터가 존재하지 않습니다.'));
      return;
    }

    const updatedChatRoomList = produce(session, draft => {
      const target = draft.find(chat => chat.roomId === roomId);

      if (target) {
        target.unreadCount = 0;
      }
    });

    setSession(sessionKey, updatedChatRoomList);

    resolve(updatedChatRoomList);
  });
}

export function putChatRoomListLastMessage(roomId: string, lastMessage: MessageType) {
  return new Promise<ChatRoomListType>((resolve, reject) => {
    const session = getSession<ChatRoomListType>(sessionKey);

    if (!session) {
      reject(new Error('채팅목록 데이터가 존재하지 않습니다.'));
      return;
    }

    const updatedChatRoomList = produce(session, draft => {
      const target = draft.find(chat => chat.roomId === roomId);

      if (target) {
        target.lastMessage = lastMessage;
      }
    });

    const sortedChatRoomList = orderBy(updatedChatRoomList, ({ lastMessage: { timeStamp } }) => timeStamp, ['desc']);
    setSession(sessionKey, sortedChatRoomList);

    resolve(updatedChatRoomList);
  });
}
