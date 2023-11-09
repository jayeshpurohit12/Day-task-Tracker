import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {TabBar, TabView} from 'react-native-tab-view';
import {scale, verticalScale, width} from '../../constants/Layout';
import TaskCard from './partials/task-card';
import colors from '../../constants/colors';
import {useRoute} from '@react-navigation/native';
import {useFetchActivity} from './hooks';
import FastImage from 'react-native-fast-image';
import Images from '../../Images';

interface IParams {
  tabBarName?: string;
}

const MyTasks = () => {
  const insets = useSafeAreaInsets();
  const route = useRoute();

  const {tabBarName} = (route?.params as IParams) || {};

  const [index, setIndex] = useState(0);
  const [routes] = React.useState([
    {key: 'recent', title: 'Recent'},
    {key: 'inprogress', title: 'In Progress'},
    {key: 'completed', title: 'Completed'},
  ]);

  const {data, isLoading} = useFetchActivity({
    status: routes[index].key,
  });

  useEffect(() => {
    if (tabBarName) {
      const tabIndex = routes.findIndex(
        tabRoute => tabRoute.key === tabBarName,
      );
      tabIndex !== -1 ? setIndex(tabIndex) : 0;
    }
  }, [tabBarName, routes]);

  const ListEmptyComponent = () => (
    <FastImage
      source={Images.MyTasks}
      style={{
        alignSelf: 'center',
        width: scale(150),
        height: verticalScale(150),
        marginTop: verticalScale(50),
      }}
      resizeMode="contain"
    />
  );

  const renderScene = ({route}) => {
    if (isLoading) {
      return <ActivityIndicator size="large" color={colors.brandPrimary} />;
    }
    return (
      <View style={{flex: 1}}>
        <FlatList
          data={data}
          renderItem={({item}) => <TaskCard item={item} />}
          contentContainerStyle={styles.containerStyle}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={ListEmptyComponent}
        />
      </View>
    );
  };

  const renderTabBar = (props: any) => (
    <TabBar
      {...props}
      indicatorStyle={{
        backgroundColor: colors.brandPrimary,
      }}
      style={{backgroundColor: colors.white.default, marginBottom: scale(10)}}
      activeColor={colors.brandPrimary}
      inactiveColor={colors.gray.default}
      renderLabel={({route, focused}) => (
        <Text
          style={[styles.routeTitle, focused && {color: colors.brandPrimary}]}>
          {route.title}
        </Text>
      )}
    />
  );

  return (
    <View style={[styles.container, {paddingTop: insets.top}]}>
      <Text style={styles.taskText}>My Tasks</Text>
      <View style={styles.tabViewContainer}>
        <TabView
          navigationState={{index, routes}}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{width: width, height: 0}}
          renderTabBar={renderTabBar}
        />
      </View>
    </View>
  );
};

export default MyTasks;
