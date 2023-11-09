import {StyleSheet} from 'react-native';
import {scale} from '../../constants/Layout';
import colors from '../../constants/colors';

export const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: scale(25),
  },
  headingName: {
    fontSize: scale(12),
    fontFamily: 'Cabin-Variable',
    color: colors.black.default,
  },
  textInput: {
    borderWidth: 1,
    padding: scale(15),
    paddingLeft: scale(40),
    borderRadius: scale(10),
    flex: 1,
    color: colors.black.default,
  },
  icon: {
    position: 'absolute',
    left: scale(10),
  },
  innerTextInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: scale(10),
  },
  errorText: {
    color: colors.red.dark,
    fontSize: scale(10),
    top: scale(-20),
    left: scale(10),
  },
  passEyeContainer: {
    position: 'absolute',
    right: scale(10),
    zIndex: 1,
  },
});
