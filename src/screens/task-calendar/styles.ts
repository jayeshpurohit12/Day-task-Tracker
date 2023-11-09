import {StyleSheet} from 'react-native';
import {scale, verticalScale} from '../../constants/Layout';
import colors from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: scale(15),
    backgroundColor: colors.white.default,
  },
  taskHeadingText: {
    fontSize: scale(22),
    fontWeight: '700',
    color: colors.black.default,
    fontFamily: 'Cabin-Italic',
    alignSelf: 'center',
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: scale(25),
  },
  recentDateContainer: {
    backgroundColor: colors.white.default,
    borderWidth: 1,
    padding: scale(8),
    paddingHorizontal: scale(17),
    borderRadius: scale(10),
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: colors.gray.default,
    shadowOffset: {width: 0, height: 1},
    borderColor: colors.white.default,
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  dayMonthText: {
    fontSize: scale(10),
    fontWeight: '600',
    color: colors.black.default,
    fontFamily: 'Cabin-Variable',
  },
  dateText: {
    fontSize: scale(14),
    fontWeight: '600',
    color: colors.black.default,
    fontFamily: 'Cabin-Variable',
    marginVertical: verticalScale(5),
  },
  selectedDate: {
    backgroundColor: colors.brandPrimary,
  },
  routeTitle: {
    fontSize: scale(15),
    fontFamily: 'Cabin-Regular',
    fontWeight: '600',
    color: colors.gray.default,
  },
  containerStyle: {
    paddingBottom: scale(20),
  },
});
