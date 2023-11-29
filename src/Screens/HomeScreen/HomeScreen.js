import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import ImagePath from '../../Constants/ImagePath';

const HomeScreen = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={'#242C3B'} barStyle="default" />
      <ImageBackground
        source={ImagePath.BackgroundImg}
        style={{width: '100%', height: '100%'}}>
        <Text style={{color: '#ff0000'}}>hellos</Text>
      </ImageBackground>

      <SafeAreaView />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
});
