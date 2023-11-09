import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import {scale} from '../../constants/Layout';

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
  signUpText: {
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
  loginText: {
    color: colors.brandPrimary,
    fontFamily: 'Cabin-Variable',
    fontWeight: '700',
  },
});
