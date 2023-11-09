import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';
import FastImage from 'react-native-fast-image';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../../../../constants/colors';
import moment from 'moment';

const TaskCard = ({item}) => {
  const formatStartTime = moment(item?.startTime).format('hh:mm A');
  const formatEndTime = moment(item?.endTime).format('hh:mm A');

  const statusEnum = {
    IN_PROGRESS: 'inprogress',
    COMPLETED: 'completed',
    UPCOMING: 'upcoming',
  };

  const firstLetterAutoCapitalize = str => {
    return str?.charAt(0)?.toUpperCase() + str?.slice(1);
  };

  return (
    <View style={styles.taskContainer}>
      <View style={styles.taskHeadingContainer}>
        <Text style={styles.shortText}>{item?.shortDescription}</Text>
        <FastImage
          source={{
            uri: item?.url,
          }}
          style={styles.categoryImage}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.taskMainText}>{item?.title}</Text>

      <View style={styles.taskBottomContainer}>
        <View style={styles.timeContainer}>
          <MaterialIcons
            name="watch-later"
            size={18}
            color={colors.blue.light1}
          />
          <Text
            style={
              styles.timeText
            }>{`${formatStartTime} - ${formatEndTime}`}</Text>
        </View>
        <View
          style={[
            styles.progressContainer,
            {
              backgroundColor:
                item?.status === statusEnum.UPCOMING
                  ? colors.blue.light1
                  : item?.status === statusEnum.IN_PROGRESS
                  ? colors.yellow.dark1
                  : colors.green.light,
            },
          ]}>
          <Text
            style={[
              styles.taskProgressText,
              {
                color:
                  item?.status === statusEnum.UPCOMING
                    ? colors.brandPrimary
                    : item?.status === statusEnum.IN_PROGRESS
                    ? colors.black.default
                    : colors.white.default,
              },
            ]}>
            {firstLetterAutoCapitalize(item?.status)}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default TaskCard;
