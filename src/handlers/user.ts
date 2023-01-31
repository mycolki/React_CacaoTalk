import { getUserData } from 'api';
import { Member } from 'types';

async function getUser(): Promise<Member> {
  const userSession = window.sessionStorage.getItem('user');

  if (userSession) {
    return JSON.parse(userSession);
  }

  const user = await getUserData();
  window.sessionStorage.setItem('user', JSON.stringify(user));

  return user;
}

export default getUser;
