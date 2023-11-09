import {StyleSheet} from 'react-native';
import {scale} from '../../constants/Layout';
import colors from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white.default,
    paddingHorizontal: scale(15),
  },
  headerContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  appName: {
    fontSize: scale(30),
    fontFamily: 'Agbalumo-Regular',
  },
  createText: {
    fontSize: scale(20),
    fontFamily: 'Cabin-Variable',
    color: colors.black.default,
    fontWeight: '700',
    marginTop: scale(30),
    marginBottom: scale(20),
  },
  buttonContainer: {
    marginTop: scale(20),
    alignSelf: 'center',
    backgroundColor: colors.brandPrimary,
    width: '100%',
    padding: scale(17),
    borderRadius: scale(12),
  },
  loginText: {
    fontSize: scale(15),
    fontFamily: 'Cabin-Variable',
    color: colors.white.default,
    fontWeight: '700',
    textAlign: 'center',
  },
  alreadyAccountContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: scale(20),
  },
  alreadyAccountText: {
    textAlign: 'center',
    fontFamily: 'Cabin-Variable',
    color: colors.gray.default,
  },
  signupText: {
    color: colors.brandPrimary,
    fontFamily: 'Cabin-Variable',
    fontWeight: '700',
  },
  errorText: {
    color: colors.red.dark,
    fontSize: scale(12),
    marginTop: scale(10),
    alignSelf: 'center',
    fontFamily: 'Cabin-Variable',
  },
});
