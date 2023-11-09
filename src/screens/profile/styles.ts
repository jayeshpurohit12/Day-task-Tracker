import {StyleSheet} from 'react-native';
import {scale} from '../../constants/Layout';
import colors from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: scale(15),
    backgroundColor: colors.white.default,
  },
  profileText: {
    fontSize: scale(22),
    fontWeight: '700',
    color: colors.black.default,
    fontFamily: 'Cabin-Italic',
    alignSelf: 'center',
  },
  accountIcon: {
    width: scale(100),
    height: scale(100),
    alignSelf: 'center',
    marginTop: scale(30),
    marginBottom: scale(20),
  },
  buttonContainer: {
    marginTop: scale(35),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.brandPrimary,
    padding: scale(16),
    borderRadius: scale(15),
  },
  buttonText: {
    fontSize: scale(15),
    color: colors.white.default,
    fontFamily: 'Cabin-Variable',
    fontWeight: '700',
  },
});
