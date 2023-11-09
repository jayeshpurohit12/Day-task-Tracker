import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import moment from 'moment';
import colors from '../../constants/colors';
import {TabBar, TabView} from 'react-native-tab-view';
import {scale, verticalScale, width} from '../../constants/Layout';
import TaskCard from '../my-tasks/partials/task-card';
import {useFetchActivity} from '../my-tasks/hooks';
import FastImage from 'react-native-fast-image';
import Images from '../../Images';

const Calendars = () => {
  const insets = useSafeAreaInsets();

  const currentDate = moment().format('DDMMMYYYY');

  const [formattedDate, setFormattedDate] = useState<string[]>([]);
  const [selectedDateIndex, setSelectedDateIndex] = useState(2);
  const [slectedDate, setSelectedDate] = useState(currentDate);
  const [tabIndex, setTabIndex] = useState(0);
  const [routes] = React.useState([
    {key: 'all', title: 'All'},
    {key: 'upcoming', title: 'Upcoming'},
    {key: 'inprogress', title: 'In Progress'},
    {key: 'completed', title: 'Completed'},
  ]);

  const {data, isLoading} = useFetchActivity({
    status: routes[tabIndex].key,
    date: slectedDate,
  });

  useEffect(() => {
    const fetchDate = () => {
      const formattedDates = [];

      for (let i = -2; i <= 2; i++) {
        formattedDates.push(moment().add(i, 'days').format('D MMM ddd YYYY'));
      }

      return formattedDates;
    };

    setFormattedDate(fetchDate());
  }, []);

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
        borderRadius: scale(10),
        height: '100%',
      }}
      scrollEnabled
      style={{
        backgroundColor: colors.white.default,
        marginVertical: verticalScale(15),
      }}
      renderLabel={({route, focused}) => (
        <Text
          style={[styles.routeTitle, focused && {color: colors.white.default}]}>
          {route.title}
        </Text>
      )}
    />
  );

  return (
    <View style={[styles.container, {paddingTop: insets.top}]}>
      <Text style={styles.taskHeadingText}>Today's Task</Text>
      <View style={styles.dateContainer}>
        {formattedDate &&
          formattedDate.map((item, index) => {
            // const month = item.substring(item.length - 8, item.length - 5);
            // const date = item.substring(0, item.length - item.length + 1);
            // const day = item.substring(item.length - 3, item.length);
            // const year = item.substring(item.length - 4, item.length);

            const month = moment(item, 'D MMM ddd YYYY')
              .format('MMM')
              .toLowerCase();
            const date = moment(item, 'D MMM ddd YYYY').format('DD');
            const day = moment(item, 'D MMM ddd YYYY').format('ddd');
            const year = moment(item, 'D MMM ddd YYYY').format('YYYY');

            return (
              <TouchableOpacity
                key={date}
                style={[
                  styles.recentDateContainer,
                  selectedDateIndex === index && styles.selectedDate,
                ]}
                onPress={() => {
                  setSelectedDateIndex(index);
                  setSelectedDate(`${date}${month}${year}`);
                }}>
                <Text
                  style={[
                    styles.dayMonthText,
                    selectedDateIndex === index && {
                      color: colors.white.default,
                    },
                  ]}>
                  {month}
                </Text>
                <Text
                  style={[
                    styles.dateText,
                    selectedDateIndex === index && {
                      color: colors.white.default,
                    },
                  ]}>
                  {date}
                </Text>
                <Text
                  style={[
                    styles.dayMonthText,
                    selectedDateIndex === index && {
                      color: colors.white.default,
                    },
                  ]}>
                  {day}
                </Text>
              </TouchableOpacity>
            );
          })}
      </View>

      <TabView
        navigationState={{index: tabIndex, routes}}
        renderScene={renderScene}
        onIndexChange={setTabIndex}
        initialLayout={{width: width, height: 0}}
        renderTabBar={renderTabBar}
      />
    </View>
  );
};

export default Calendars;
