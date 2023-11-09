import {useQuery} from 'react-query';
import {IFetchTask, fetchMyTask} from '../../api/myTask';

export const useFetchActivity = ({date, status}: IFetchTask) => {
  const {data, isLoading} = useQuery(['fetch-activity', status, date], () =>
    fetchMyTask({date, status}),
  );
  return {data, isLoading};
};
