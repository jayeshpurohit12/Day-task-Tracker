import {View, Text, FlatList} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {styles} from './styles';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../../../constants/colors';
import moment from 'moment';
import {scale, width} from '../../../../constants/Layout';

const RecentTask = ({recentTask}) => {
  const flatListRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState<any>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < recentTask.length - 1) {
        flatListRef.current.scrollToIndex({
          animated: true,
          index: currentIndex + 1,
        });
        setCurrentIndex(prevIndex => prevIndex + 1);
      }
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex, recentTask.length]);

  const ListEmptyComponent = () => (
    <LinearGradient
      colors={[colors.brandPrimary, colors.blue.light]}
      style={styles.recentContainer}>
      <Text style={styles.recentTitle}>No Task Added</Text>
      <View style={styles.dateTimeContainer}>
        <View style={styles.dateContainer}>
          <Text style={styles.dateTimeText}>Date: </Text>
          <Text style={styles.dateTime}>--</Text>
        </View>
        <View style={styles.dateContainer}>
          <Text style={styles.dateTimeText}>Time: </Text>
          <Text style={styles.dateTime}>--</Text>
        </View>
      </View>
    </LinearGradient>
  );

  const renderRecentTask = ({item}) => {
    const formattedDate = moment(item?.date).format('D MMM YYYY');
    const formattedStartTime = moment(item?.startTime).format('hh:mm A');

    return (
      <LinearGradient
        colors={[colors.brandPrimary, colors.blue.light]}
        style={styles.recentContainer}>
        <Text style={styles.recentTitle}>{item?.title}</Text>
        <View style={styles.dateTimeContainer}>
          <View style={styles.dateContainer}>
            <Text style={styles.dateTimeText}>Date: </Text>
            <Text style={styles.dateTime}>{formattedDate}</Text>
          </View>
          <View style={styles.dateContainer}>
            <Text style={styles.dateTimeText}>Time: </Text>
            <Text style={styles.dateTime}>{formattedStartTime}</Text>
          </View>
        </View>
      </LinearGradient>
    );
  };

  return (
    <View>
      <Text style={styles.recentHeading}>Recent Task</Text>
      <FlatList
        ref={flatListRef}
        data={recentTask}
        renderItem={renderRecentTask}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.recentTaskContainer}
        keyExtractor={item => item.id}
        ListEmptyComponent={ListEmptyComponent}
        onScroll={e => {
          const x = e.nativeEvent.contentOffset.x;
          setCurrentIndex(x / width)?.toFixed(0);
        }}
        horizontal
        pagingEnabled
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {recentTask.map((item, index) => {
          return (
            <View
              key={index}
              style={{
                borderWidth: 1,
                marginTop: scale(10),
                width: scale(7),
                height: scale(7),
                borderRadius: scale(20),
                alignSelf: 'center',
                marginLeft: scale(5),
                backgroundColor:
                  currentIndex === index
                    ? colors.brandPrimary
                    : colors.blue.light1,
                borderColor:
                  currentIndex === index
                    ? colors.brandPrimary
                    : colors.blue.light1,
              }}
            />
          );
        })}
      </View>
    </View>
  );
};

export default RecentTask;
