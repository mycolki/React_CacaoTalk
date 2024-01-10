import { useQuery } from 'react-query';
import getCurrentUser from 'handlers/currentUser';

function useCurrentUser() {
  const { data: currentUser } = useQuery(['user'], getCurrentUser, { staleTime: Infinity });

  return currentUser;
}

export default useCurrentUser;
