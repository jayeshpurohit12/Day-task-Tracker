import {StyleSheet} from 'react-native';
import {scale, verticalScale} from '../../../../constants/Layout';
import colors from '../../../../constants/colors';

export const styles = StyleSheet.create({
  taskContainer: {
    borderWidth: 1,
    borderRadius: scale(10),
    padding: scale(10),
    marginBottom: scale(20),
    borderColor: colors.white.default,
    backgroundColor: colors.white.default,
    shadowColor: colors.black.default,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    marginHorizontal: scale(2),
  },
  categoryImage: {
    width: scale(20),
    height: scale(20),
  },
  taskHeadingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  shortText: {
    fontSize: scale(12),
    fontFamily: 'Cabin-Variable',
    fontWeight: '500',
    color: colors.gray.default,
  },
  taskMainText: {
    fontSize: scale(16),
    fontFamily: 'Cabin-Variable',
    fontWeight: '700',
    color: colors.black.default,
    marginVertical: verticalScale(5),
  },
  timeText: {
    fontSize: scale(11),
    fontFamily: 'Cabin-Variable',
    fontWeight: '600',
    color: colors.blue.light1,
    marginLeft: scale(5),
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  taskBottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: scale(10),
  },
  progressContainer: {
    backgroundColor: colors.blue.light,
    borderRadius: scale(10),
  },
  taskProgressText: {
    fontSize: scale(11),
    fontFamily: 'Cabin-Variable',
    fontWeight: '700',
    color: colors.brandPrimary,
    paddingHorizontal: scale(7),
    paddingVertical: verticalScale(3),
  },
});
