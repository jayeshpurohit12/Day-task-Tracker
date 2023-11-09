import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';
import FastImage from 'react-native-fast-image';

const TaskCard = ({taskName, taskIcon, onPress}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
      onPress={onPress}>
      <Text style={styles.taskText}>{taskName}</Text>
      <FastImage
        source={taskIcon}
        style={styles.taskIcons}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};

export default TaskCard;
