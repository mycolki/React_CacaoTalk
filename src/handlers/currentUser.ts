import { getUserData } from 'api';
import { UserType } from 'types';
import { getSession, setSession } from './common';

async function getCurrentUser() {
  const userSession = getSession<UserType>('user');

  if (userSession) {
    return userSession;
  }

  const user = await getUserData();
  setSession('user', user);

  return user;
}

export default getCurrentUser;
