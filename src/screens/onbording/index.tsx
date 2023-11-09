import {View, Text} from 'react-native';
import React from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import {styles} from './styles';
import {slides} from './sliders';
import FastImage from 'react-native-fast-image';
import {useNavigation} from '@react-navigation/native';

const OnBording = () => {
  const navigation = useNavigation();

  const renderItem = ({item}) => {
    return (
      <View style={styles.slide}>
        <FastImage
          style={{width: item.width, height: item.height}}
          source={item.image}
          resizeMode="contain"
        />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };

  const onDone = () => {
    navigation.navigate('Login');
    navigation.reset({
      index: 0,
      routes: [{name: 'Login'}],
    });
  };

  return (
    <View style={styles.container}>
      <AppIntroSlider
        renderItem={renderItem}
        data={slides}
        onDone={onDone}
        activeDotStyle={styles.activeDotStyle}
        bottomButton
        showSkipButton={false}
        doneLabel="Get Started"
      />
    </View>
  );
};

export default OnBording;
