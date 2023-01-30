import axios from 'axios';
import produce from 'immer';
import { Chat } from 'types/chat';

export async function getChats(): Promise<Chat[]> {
  const chatSession = window.sessionStorage.getItem('chats');

  if (chatSession) {
    return JSON.parse(chatSession);
  }

  const response = await axios.get<Chat[]>(`${process.env.REACT_APP_HOST_URL}/data/chats.json`);
  window.sessionStorage.setItem('chats', JSON.stringify(response.data));

  return response.data;
}

export async function putChatReadCount(roomId: string) {
  const chats = await getChats();

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
