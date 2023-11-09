import {StyleSheet} from 'react-native';
import {scale} from '../../../../constants/Layout';
import colors from '../../../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    borderWidth: 0.4,
    width: '45%',
    borderRadius: scale(10),
    padding: scale(15),
    borderColor: colors.gray.default,
  },
  taskText: {
    fontSize: scale(17),
    fontWeight: '600',
    fontFamily: 'Cabin-Variable',
    marginBottom: scale(20),
  },
  taskIcons: {width: scale(60), height: scale(60), alignSelf: 'flex-end'},
});
