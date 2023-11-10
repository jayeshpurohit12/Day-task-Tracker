import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from './styles';
import FastImage from 'react-native-fast-image';
import Images from '../../Images';
import CustomInput from '../../components/custom-input';
import strings from '../../constants/strings';
import {Formik} from 'formik';
import * as yup from 'yup';
import colors from '../../constants/colors';
import {scale} from '../../constants/Layout';
import {AuthContext} from '../../context/AuthContext';
import {useFetchProfile} from './hooks';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface IValues {
  name: string;
  email: string;
}

const validationSchema = {
  name: yup.string().required(strings.NAME_REQUIRED),
  email: yup
    .string()
    .email(strings.EMAIL_VALIDATION)
    .required(strings.EMAIL_REQUIRED),
};

const Profile = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  const {logout} = useContext(AuthContext);

  const {data, isLoading} = useFetchProfile();

  const initialValues = {
    name: data?.user?.fullName,
    email: data?.user?.username,
  };

  const handleUpdateProfile = (values: IValues) => {
    console.log(values);
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
    <View style={[styles.container, {paddingTop: insets.top}]}>
      <Text style={styles.profileText}>Profile</Text>
      <TouchableOpacity
        style={{
          position: 'absolute',
          top: insets.top + scale(2),
          right: scale(15),
        }}
        activeOpacity={0.9}
        onPress={() => navigation.navigate('Setting')}>
        <Ionicons
          name="settings-outline"
          size={24}
          color={colors.black.default}
        />
      </TouchableOpacity>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleUpdateProfile}>
        {({errors, values, handleChange, handleSubmit}) => (
          <>
            <FastImage
              source={{uri: data?.user?.url}}
              style={styles.accountIcon}
              defaultSource={Images.Account}
            />
            <CustomInput
              iconName={strings.ACCOUNT_ICON}
              placeholder={strings.NAME_PLACEHOLDER}
              value={values.name}
              onChange={handleChange('name')}
              errors={errors.name}
              isEditable={false}
            />
            <CustomInput
              iconName={strings.EMAIL_ICON}
              placeholder={strings.EMAIL_PLACEHOLDER}
              value={values.email}
              onChange={handleChange('email')}
              errors={errors.email}
              isEditable={false}
            />
            <TouchableOpacity
              onPress={() => navigation.navigate('Activity')}
              activeOpacity={0.9}>
              <CustomInput
                iconName={strings.TASK_ICON}
                placeholder={strings.TASK_NAME}
                isEditable={false}
                value={strings.MY_TASKS}
              />
            </TouchableOpacity>

            {/* <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => handleSubmit()}
              style={styles.buttonContainer}>
              <Text style={styles.buttonText}>Update Profile</Text>
            </TouchableOpacity> */}
          </>
        )}
      </Formik>
      <TouchableOpacity
        activeOpacity={0.9}
        style={[
          styles.buttonContainer,
          {backgroundColor: colors.red.dark1, marginTop: scale(10)},
        ]}
        onPress={() => logout()}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;
