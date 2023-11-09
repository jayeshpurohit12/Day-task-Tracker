import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Keyboard,
} from 'react-native';
import React, {useContext} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import * as Yup from 'yup';
import strings from '../../constants/strings';
import {styles} from './styles';
import CustomInput from '../../components/custom-input';
import {Formik} from 'formik';
import colors from '../../constants/colors';
import {AuthContext} from '../../context/AuthContext';

interface IValues {
  email: string;
  password: string;
}

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email(strings.EMAIL_VALIDATION)
    .required(strings.EMAIL_REQUIRED),
  password: Yup.string()
    .min(6, strings.PASSWORD_MIN_LENGTH)
    .required(strings.PASSWORD_REQUIRED),
});

const Login = ({error, isLoading}) => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const {login} = useContext(AuthContext);

  const initialValues = {
    email: '',
    password: '',
  };

  const handleLogin = (values: IValues) => {
    login({email: values.email, password: values.password});
  };

  const handleSignup = () => {
    navigation.navigate('Signup');
  };

  return (
    <TouchableOpacity
      style={[styles.container, {paddingTop: insets.top}]}
      onPress={() => Keyboard.dismiss()}
      activeOpacity={1}>
      <View style={styles.headerContainer}>
        <Text style={styles.appName}>{strings.APP_START_NAME}</Text>
        <Text style={[styles.appName, {color: colors.brandPrimary}]}>
          {strings.APP_END_NAME}
        </Text>
      </View>

      <Text style={styles.createText}>{strings.WELCOME_BACK}</Text>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleLogin}>
        {({errors, values, handleChange, handleSubmit}) => (
          <>
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
              activeOpacity={0.9}>
              {isLoading ? (
                <ActivityIndicator size={18} color={colors.white.default} />
              ) : (
                <Text style={styles.loginText}>Log In</Text>
              )}
            </TouchableOpacity>
            {error && <Text style={styles.errorText}>{error}</Text>}
          </>
        )}
      </Formik>

      <View style={styles.alreadyAccountContainer}>
        <Text style={styles.alreadyAccountText}>{strings.ALREADY_ACCOUNT}</Text>
        <TouchableOpacity activeOpacity={0.8} onPress={handleSignup}>
          <Text style={styles.signupText}>
            {' '}
            {strings.ALREADY_ACCOUNT_SIGNUP}
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default Login;
