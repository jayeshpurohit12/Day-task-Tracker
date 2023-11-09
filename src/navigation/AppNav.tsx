import React, {useEffect, useState} from 'react';
import {storage} from '../storage';
import {IAddLogin} from '../api/auth';
import {ActivityIndicator, View} from 'react-native';
import colors from '../constants/colors';
import RootNavigatior from './RootNavigatior';
import AuthNavigator from './AuthNavigator';
import {useAddLogin} from '../screens/login/hooks';
import {AuthContext} from '../context/AuthContext';

const AppNav = () => {
  const [userToken, setUserToken] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  const {mutate, data, error, isLoading: isLoginLoading} = useAddLogin();

  const isLoggedin = () => {
    const accessToken = storage.getString('accessToken');
    setUserToken(accessToken);
    setIsLoading(false);
  };

  useEffect(() => {
    setTimeout(() => {
      isLoggedin();
    }, 500);
  }, []);

  useEffect(() => {
    if (data) {
      storage.set('accessToken', data?.token);
      setUserToken(data?.token);
      setIsLoading(false);
    }
  }, [data]);

  const login = ({email, password}: IAddLogin) => {
    mutate({email, password});
    setIsLoading(false);
  };

  const logout = () => {
    setUserToken(null);
    storage.delete('accessToken');
    setIsLoading(false);
  };

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator size="large" color={colors.brandPrimary} />
      </View>
    );
  }
  return (
    <AuthContext.Provider value={{login, logout}}>
      {userToken ? (
        <RootNavigatior />
      ) : (
        <AuthNavigator error={error} isLoading={isLoginLoading} />
      )}
    </AuthContext.Provider>
  );
};

export default AppNav;
