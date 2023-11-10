import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import colors from '../../constants/colors';
import {scale} from '../../constants/Layout';
import {useDeleteAccount} from './hooks';

const Setting = () => {
  const insets = useSafeAreaInsets();

  const {mutate, isLoading} = useDeleteAccount();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.white.default,
        paddingTop: insets.top + scale(10),
        paddingHorizontal: scale(20),
      }}>
      <TouchableOpacity
        style={{
          backgroundColor: colors.red.dark1,
          width: '100%',
          padding: scale(15),
          borderRadius: scale(15),
        }}
        onPress={() => mutate()}>
        {isLoading ? (
          <ActivityIndicator size={18} color={colors.white.default} />
        ) : (
          <Text
            style={{
              textAlign: 'center',
              color: colors.white.default,
              fontSize: scale(15),
              fontWeight: '600',
              fontFamily: 'Cabin-Variable',
            }}>
            Delete Account
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Setting;
