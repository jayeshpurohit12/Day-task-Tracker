import {useMutation} from 'react-query';
import {IAddSignup, addRegister} from '../../api/auth';
import {useNavigation} from '@react-navigation/native';

export const useAddSignup = () => {
  const navigation = useNavigation();

  const {mutateAsync, isLoading} = useMutation({
    mutationFn: ({email, fullName, password}: IAddSignup) =>
      addRegister({email, fullName, password}),
    onSuccess: () => {
      navigation.goBack();
    },
  });

  return {mutateAsync, isLoading};
};
