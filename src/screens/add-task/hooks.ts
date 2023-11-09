import {useMutation, useQueryClient} from 'react-query';
import {IAddTask, addTask} from '../../api/createTask';
import {useNavigation} from '@react-navigation/native';

export const useAddTask = () => {
  const navigation = useNavigation();
  const queryClient = useQueryClient();

  const {mutateAsync, isLoading, error, isError} = useMutation({
    mutationKey: 'addTask',
    mutationFn: ({
      title,
      description,
      shortDescription,
      category,
      date,
      startTime,
      endTime,
    }: IAddTask) =>
      addTask({
        title,
        description,
        shortDescription,
        category,
        date,
        startTime,
        endTime,
      }),
    onSuccess: () => {
      navigation.navigate('Home');
      queryClient.invalidateQueries('fetch-recent-task-home');
      queryClient.invalidateQueries('fetch-activity');
    },
  });

  return {
    mutateAsync,
    isLoading,
    error,
    isError,
  };
};
