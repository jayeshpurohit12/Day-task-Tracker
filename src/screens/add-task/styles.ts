import {StyleSheet} from 'react-native';
import {scale, verticalScale} from '../../constants/Layout';
import colors from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: scale(15),
    backgroundColor: colors.white.default,
  },
  createText: {
    fontSize: scale(22),
    fontWeight: '700',
    color: colors.black.default,
    fontFamily: 'Cabin-Italic',
    alignSelf: 'center',
  },
  taskName: {
    fontSize: scale(13),
    color: colors.white.default,
    fontFamily: 'Cabin-Variable',
    marginTop: scale(25),
    marginBottom: scale(10),
  },
  inputContainer: {
    borderBottomWidth: 1,
    borderBottomColor: colors.brandPrimary,
    paddingBottom: scale(6),
    color: colors.white.default,
    fontFamily: 'Cabin-Variable',
    fontWeight: '500',
    width: '95%',
    fontSize: scale(15),
  },
  bottomSheetContainer: {
    padding: scale(15),
  },
  startEndTimeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: scale(35),
    marginBottom: scale(20),
  },
  startTimeContainer: {},
  startEndTimeText: {
    fontSize: scale(13),
    color: colors.gray.default,
    fontFamily: 'Cabin-Variable',
    marginBottom: scale(15),
    fontWeight: '500',
  },
  startEndTime: {
    fontSize: scale(17),
    color: colors.brandPrimary,
    fontFamily: 'Cabin-Variable',
    fontWeight: '700',
  },
  lineBreaker: {
    borderWidth: 0.8,
    borderColor: colors.gray.light,
    width: '95%',
  },
  descriptionText: {
    marginTop: scale(18),
    marginBottom: scale(11),
    color: colors.gray.default,
    fontWeight: '600',
  },
  descritionInput: {
    borderBottomWidth: 1,
    paddingBottom: scale(7),
    borderBottomColor: colors.brandPrimary,
    fontFamily: 'Cabin-Variable',
    fontWeight: '500',
    width: '95%',
    fontSize: scale(15),
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
  errors: {
    fontSize: scale(11),
    color: colors.red.dark,
    fontFamily: 'Cabin-Variable',
    fontWeight: '500',
    marginTop: scale(5),
  },
});
