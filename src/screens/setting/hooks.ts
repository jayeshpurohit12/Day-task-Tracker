import {useMutation} from 'react-query';
import {deleteAccount} from '../../api/deleteAccount';
import {useContext} from 'react';
import {AuthContext} from '../../context/AuthContext';

export const useDeleteAccount = () => {
  const {logout} = useContext(AuthContext);

  const {mutate, isLoading} = useMutation({
    mutationKey: 'deleteAccount',
    mutationFn: () => deleteAccount(),
    onSuccess: data => {
      console.log(data, 'data...');
      logout();
    },
  });

  return {mutate, isLoading};
};
