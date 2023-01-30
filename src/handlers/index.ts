import produce from 'immer';
import { getChatsData, getRoomData } from 'api';
import { Chat, Room } from 'types';

export async function getChats(): Promise<Chat[]> {
  const chatSession = window.sessionStorage.getItem('chats');

  if (chatSession) {
    return JSON.parse(chatSession);
  }

  const chats = await getChatsData();
  window.sessionStorage.setItem('chats', JSON.stringify(chats));

  return chats;
}

export async function updateChatReadCount(roomId: string) {
  const chats = await getChatsData();

  const updatedChats = produce(chats, draft => {
    const target = draft.find(chat => chat.roomId === roomId);

    if (target) {
      target.unReadCount = 0;
    }
  });

  window.sessionStorage.setItem('chats', JSON.stringify(updatedChats));

  return {
    result: 'success',
  };
}

export async function getRoom(roomId: string): Promise<Room> {
  const roomSession = window.sessionStorage.getItem(`roomId:${roomId}`);

  if (roomSession) {
    return JSON.parse(roomSession);
  }

  const room = await getRoomData(roomId);
  window.sessionStorage.setItem(`roomId:${roomId}`, JSON.stringify(room));
  console.log(room);
  return room;
}
