import {useQuery} from 'react-query';
import {fetchHomeRecentTask} from '../../api/recentTaskHome';

export const useFetchRecentTaskHome = () => {
  const {data, isLoading} = useQuery(['fetch-recent-task-home'], () =>
    fetchHomeRecentTask(),
  );

  return {data, isLoading};
};
