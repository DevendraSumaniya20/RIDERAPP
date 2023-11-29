import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NavigationString from '../Constants/NavigationString';

import TabNavigation from './TabNavigation';
import MapScreen from '../Screens/MapScreen/MapScreen';
import CartScreen from '../Screens/CartScreen/CartScreen';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import CheckOutScreen from '../Screens/CheckOutScreen/CheckOutScreen';
import ProfileScreen from '../Screens/ProfileScreen/ProfileScreen';
import DocScreen from '../Screens/DocScreen/DocScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name={NavigationString.TABSCREEN}
          component={TabNavigation}
        />

        <Stack.Screen name={NavigationString.HOME} component={HomeScreen} />
        <Stack.Screen name={NavigationString.MAP} component={MapScreen} />
        <Stack.Screen name={NavigationString.CART} component={CartScreen} />
        <Stack.Screen
          name={NavigationString.PROFILE}
          component={ProfileScreen}
        />
        <Stack.Screen
          name={NavigationString.CHECKOUT}
          component={CheckOutScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name={NavigationString.DOCS} component={DocScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
