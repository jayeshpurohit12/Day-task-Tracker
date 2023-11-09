import {useQuery} from 'react-query';
import {fetchProfile} from '../../api/profile';

export const useFetchProfile = () => {
  const {data, isLoading} = useQuery(['fetch-profile'], () => fetchProfile(), {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  return {data, isLoading};
};
