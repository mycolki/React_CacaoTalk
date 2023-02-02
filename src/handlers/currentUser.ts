import { getCurrentUserData } from 'api';
import { UserType } from 'types';
import { getSession, setSession } from './common';

const sessionKey = 'user';

async function getCurrentUser() {
  const userSession = getSession<UserType>(sessionKey);

  if (userSession) {
    return userSession;
  }

  const user = await getCurrentUserData();
  setSession(sessionKey, user);

  return user;
}

export default getCurrentUser;
