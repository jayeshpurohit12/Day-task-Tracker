import {StyleSheet} from 'react-native';
import {scale, verticalScale, width} from '../../../../constants/Layout';
import colors from '../../../../constants/colors';

export const styles = StyleSheet.create({
  recentHeading: {
    fontSize: scale(17),
    color: colors.black.default,
    fontWeight: '600',
    fontFamily: 'Cabin-Variable',
    paddingHorizontal: scale(15),
  },
  recentContainer: {
    padding: scale(15),
    borderRadius: scale(10),
    paddingHorizontal: scale(20),
    marginHorizontal: scale(10),
    width: width - scale(20),
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: scale(10),
  },
  dateTimeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: verticalScale(5),
    justifyContent: 'space-between',
  },
  recentTitle: {
    fontSize: scale(16),
    fontWeight: '600',
    fontFamily: 'Cabin-Variable',
    color: colors.white.default,
  },
  dateTimeText: {
    fontFamily: 'Cabin-Variable',
    color: colors.white.default,
    fontWeight: '600',
  },
  dateTime: {
    color: colors.yellow.dark1,
    fontWeight: '600',
  },
  recentTaskContainer: {
    marginTop: scale(10),
  },
});
