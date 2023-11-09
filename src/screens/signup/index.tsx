import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Keyboard,
} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import colors from '../../constants/colors';
import strings from '../../constants/strings';
import CustomInput from '../../components/custom-input';
import {Formik} from 'formik';
import {useNavigation} from '@react-navigation/native';
import * as Yup from 'yup';
import {useAddSignup} from './hooks';

interface IValues {
  fullName: string;
  email: string;
  password: string;
}

const validationSchema = Yup.object().shape({
  fullName: Yup.string().required(strings.NAME_REQUIRED),
  email: Yup.string()
    .email(strings.EMAIL_VALIDATION)
    .required(strings.EMAIL_REQUIRED),
  password: Yup.string()
    .min(6, strings.PASSWORD_MIN_LENGTH)
    .required(strings.PASSWORD_REQUIRED),
});

const Signup = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  const initialValues = {
    fullName: '',
    email: '',
    password: '',
  };

  const {mutateAsync, isLoading} = useAddSignup();

  const handleSignup = (values: IValues) => {
    mutateAsync({
      fullName: values.fullName,
      email: values.email,
      password: values.password,
    });
  };

  const handleLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <TouchableOpacity
      style={[styles.container, {paddingTop: insets.top}]}
      activeOpacity={1}
      onPress={() => Keyboard.dismiss()}>
      <View style={styles.headerContainer}>
        <Text style={styles.appName}>{strings.APP_START_NAME}</Text>
        <Text style={[styles.appName, {color: colors.brandPrimary}]}>
          {strings.APP_END_NAME}
        </Text>
      </View>

      <Text style={styles.createText}>{strings.CREATE_ACCOUNT}</Text>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSignup}>
        {({errors, values, handleChange, handleSubmit}) => (
          <>
            <CustomInput
              placeholder={strings.NAME_PLACEHOLDER}
              iconName={strings.ACCOUNT_ICON}
              textInputName={strings.FULL_NAME}
              errors={errors.fullName}
              value={values.fullName}
              onChange={handleChange('fullName')}
            />
            <CustomInput
              placeholder={strings.EMAIL_PLACEHOLDER}
              iconName={strings.EMAIL_ICON}
              textInputName={strings.EMAIL}
              errors={errors.email}
              value={values.email}
              onChange={handleChange('email')}
            />
            <CustomInput
              placeholder={strings.PASSWORD_PLACEHOLDER}
              iconName={strings.PASSWORD_ICON}
              textInputName={strings.PASSWORD}
              errors={errors.password}
              value={values.password}
              onChange={handleChange('password')}
              isPassword
            />

            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => handleSubmit()}
              disabled={isLoading}
              activeOpacity={0.9}>
              {isLoading ? (
                <ActivityIndicator size={18} color={colors.white.default} />
              ) : (
                <Text style={styles.signUpText}>Sign Up</Text>
              )}
            </TouchableOpacity>
          </>
        )}
      </Formik>

      <View style={styles.alreadyAccountContainer}>
        <Text style={styles.alreadyAccountText}>{strings.ALREADY_ACCOUNT}</Text>
        <TouchableOpacity activeOpacity={0.8} onPress={handleLogin}>
          <Text style={styles.loginText}> {strings.ALREADY_ACCOUNT_LOGIN}</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default Signup;
