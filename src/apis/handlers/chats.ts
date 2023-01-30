import axios from 'axios';
import { Chat } from 'types/chat';

async function getChats(): Promise<Chat[]> {
  const chats = window.sessionStorage.getItem('chats');

  if (chats) {
    return JSON.parse(chats);
  }

  const response = await axios.get<Chat[]>(`${process.env.REACT_APP_HOST_URL}/data/chats.json`);
  window.sessionStorage.setItem('chats', JSON.stringify(response.data));

  return response.data;
}

export default getChats;
