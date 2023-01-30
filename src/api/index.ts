import axios from 'axios';
import { Chat, Room, Member } from 'types';

export async function getChatsData() {
  const response = await axios.get<Chat[]>(`${process.env.REACT_APP_HOST_URL}/data/chats.json`);
  return response.data;
}

export async function getRoomData(roomId: string) {
  const response = await axios.get<Room>(`${process.env.REACT_APP_HOST_URL}/data/room/${roomId}.json`);
  return response.data;
}

export async function getUser() {
  const response = await axios.get<Member>(`${process.env.REACT_APP_HOST_URL}/data/user.json`);
  return response.data;
}
