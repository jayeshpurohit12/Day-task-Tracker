import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import RecentTask from './partials/recent-task';
import FastImage from 'react-native-fast-image';
import Images from '../../Images';
import {useNavigation} from '@react-navigation/native';
import TaskCard from './partials/task';
import strings from '../../constants/strings';
import {useFetchRecentTaskHome} from './hooks';
import colors from '../../constants/colors';

const Home = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  const {data, isLoading} = useFetchRecentTaskHome();

  const handleProfile = () => {
    navigation.navigate('Profile');
  };

  const handleMyTask = () => {
    navigation.navigate('Activity', {
      tabBarName: 'recent',
    });
  };

  const handleInProgress = () => {
    navigation.navigate('Activity', {
      tabBarName: 'inprogress',
    });
  };

  const handleCalendar = () => {
    navigation.navigate('Calendars');
  };

  const handleCompleted = () => {
    navigation.navigate('Activity', {
      tabBarName: 'completed',
    });
  };

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator size="large" color={colors.brandPrimary} />
      </View>
    );
  }

  return (
    <View style={[styles.container, {paddingTop: insets.top}]}>
      <TouchableOpacity style={styles.headerContainer} onPress={handleProfile}>
        <FastImage
          defaultSource={Images.User}
          source={{uri: data?.url}}
          style={styles.userIcon}
        />
        <View style={styles.taskContainer}>
          <Text style={styles.taskTitle}>My Task</Text>
          <Text style={styles.currentTaskText}>{data?.message}</Text>
        </View>
      </TouchableOpacity>

      <RecentTask recentTask={data?.tasks} />

      <View style={styles.homeTaskContainer}>
        <TaskCard
          taskIcon={Images.MyTasks}
          taskName={strings.MY_TASKS}
          onPress={handleMyTask}
        />
        <TaskCard
          taskIcon={Images.InProgress}
          taskName={strings.IN_PROGRESS}
          onPress={handleInProgress}
        />
      </View>

      <View style={styles.homeTaskContainer}>
        <TaskCard
          taskIcon={Images.Calendar}
          taskName={strings.CALENDAR}
          onPress={handleCalendar}
        />
        <TaskCard
          taskIcon={Images.Completed}
          taskName={strings.COMPLETED}
          onPress={handleCompleted}
        />
      </View>
    </View>
  );
};

export default Home;
