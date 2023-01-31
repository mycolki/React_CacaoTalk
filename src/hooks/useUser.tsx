import getUser from 'handlers/user';
import { useQuery } from 'react-query';

function useUser() {
  const { data: user } = useQuery({ queryKey: ['user'], queryFn: getUser, staleTime: Infinity });

  return user;
}

export default useUser;
