import { nanoid } from 'nanoid';
import { formatDateToUTC } from 'utils/formatDate';
import { getRoomData } from 'api';
import { Room, Message } from 'types';

export async function getRoom(roomId?: string): Promise<Room> {
  const roomSession = window.sessionStorage.getItem(`roomId:${roomId}`);

  if (roomSession) {
    return JSON.parse(roomSession);
  }

  const room = await getRoomData(roomId);
  window.sessionStorage.setItem(`roomId:${roomId}`, JSON.stringify(room));

  return room;
}

export function postMessage(roomId: string, message: Omit<Message, 'id' | 'timeStamp'>) {
  return new Promise<Room>((resolve, reject) => {
    const roomSession = window.sessionStorage.getItem(`roomId:${roomId}`);

    if (!roomSession) {
      reject(new Error('채팅방 데이터가 존재하지 않습니다.'));
      return;
    }

    const room: Room = JSON.parse(roomSession);
    room.messages.push({ ...message, id: nanoid(), timeStamp: formatDateToUTC() });
    window.sessionStorage.setItem(`roomId:${roomId}`, JSON.stringify(room));

    resolve(room);
  });
}
