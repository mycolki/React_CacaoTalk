import { useQuery } from 'react-query';
import { getUser } from 'handlers';

function useUser() {
  const { data: user } = useQuery({ queryKey: ['user'], queryFn: getUser, staleTime: Infinity });

  return user;
}

export default useUser;
