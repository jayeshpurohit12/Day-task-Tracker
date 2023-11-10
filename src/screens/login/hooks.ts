import {useMutation} from 'react-query';
import {IAddLogin, addLogin} from '../../api/auth';

export const useAddLogin = () => {
  const {mutate, isLoading, data, error, isError} = useMutation({
    mutationKey: 'addLogin',
    mutationFn: ({email, password}: IAddLogin) => addLogin({email, password}),
    onMutate: async ({email, password}: IAddLogin) => {
      console.log(email, password, 'onMutate...');
    },
  });

  return {mutate, isLoading, data, error, isError};
};
