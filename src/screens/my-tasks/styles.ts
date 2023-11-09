import {StyleSheet} from 'react-native';
import {scale} from '../../constants/Layout';
import colors from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: scale(15),
    backgroundColor: colors.white.default,
  },
  taskText: {
    alignSelf: 'center',
    fontSize: scale(22),
    fontFamily: 'Cabin-Italic',
    fontWeight: '700',
  },
  tabViewContainer: {flex: 1, marginTop: scale(20)},
  routeTitle: {
    fontSize: scale(15),
    fontFamily: 'Cabin-Regular',
    fontWeight: '600',
  },
  containerStyle: {
    paddingTop: scale(15),
    paddingBottom: scale(20),
  },
});
