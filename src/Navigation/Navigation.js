import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NavigationString from '../Constants/NavigationString';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import CartScreen from '../Screens/CartScreen/CartScreen';
import CheckOutScreen from '../Screens/CheckOutScreen/CheckOutScreen';
import TabNavigation from './TabNavigation';

const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name={NavigationString.TABSCREEN}
          component={TabNavigation}
        />
        <Stack.Screen name={NavigationString.CART} component={CartScreen} />
        <Stack.Screen
          name={NavigationString.CHECKOUT}
          component={CheckOutScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
