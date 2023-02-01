import axios from 'axios';
import { ChatRoomListType, ChatRoomType, UserType } from 'types';

export async function getChatRoomListData() {
  const response = await axios.get<ChatRoomListType>(`${process.env.REACT_APP_HOST_URL}/data/chats.json`);
  return response.data;
}

export async function getChatRoomData(roomId?: string) {
  const response = await axios.get<ChatRoomType>(`${process.env.REACT_APP_HOST_URL}/data/room/${roomId}.json`);
  return response.data;
}

export async function getUserData() {
  const response = await axios.get<UserType>(`${process.env.REACT_APP_HOST_URL}/data/user.json`);
  return response.data;
}
