import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import {scale} from '../../constants/Layout';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white.default,
  },
  accountContainer: {
    backgroundColor: colors.gray.default,
    padding: scale(8),
    borderRadius: scale(30),
  },
  headerContainer: {
    flexDirection: 'row',
    marginBottom: scale(22),
    paddingHorizontal: scale(15),
  },
  userIcon: {
    width: scale(40),
    height: scale(40),
  },
  taskContainer: {
    alignSelf: 'center',
    marginLeft: scale(10),
  },
  taskTitle: {
    fontFamily: 'Cabin-Variable',
    fontSize: scale(15),
    fontWeight: '700',
    marginBottom: scale(5),
  },
  currentTaskText: {
    fontFamily: 'Cabin-Variable',
    fontSize: scale(11),
    color: colors.gray.default,
  },
  homeTaskContainer: {
    paddingHorizontal: scale(15),
    marginTop: scale(40),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
