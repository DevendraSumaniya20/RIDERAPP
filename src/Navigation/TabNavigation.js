import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import NavigationString from '../Constants/NavigationString';
import MapScreen from '../Screens/MapScreen/MapScreen';
import CartScreen from '../Screens/CartScreen/CartScreen';
import ProfileScreen from '../Screens/ProfileScreen/ProfileScreen';
import DocScreen from '../Screens/DocScreen/DocScreen';
import SvgPath from '../Constants/SvgPath';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name={NavigationString.HOME}
        component={HomeScreen}
        options={{
          title: 'My profile',
          tabBarIcon: ({size, focused, color}) => (
            <SvgPath.BicycleTabIcon width={size} height={size} fill={color} />
          ),
        }}
      />
      <Tab.Screen
        name={NavigationString.MAP}
        component={MapScreen}
        options={{
          tabBarIcon: ({size, focused, color}) => (
            <SvgPath.MapIcon width={size} height={size} fill={color} />
          ),
        }}
      />
      <Tab.Screen
        name={NavigationString.CART}
        component={CartScreen}
        options={{
          tabBarIcon: ({size, focused, color}) => (
            <SvgPath.CartIcon width={size} height={size} fill={color} />
          ),
        }}
      />
      <Tab.Screen
        name={NavigationString.PROFILE}
        component={ProfileScreen}
        options={{
          tabBarIcon: ({size, focused, color}) => (
            <SvgPath.PersonIcon width={size} height={size} fill={color} />
          ),
        }}
      />
      <Tab.Screen
        name={NavigationString.DOCS}
        component={DocScreen}
        options={{
          tabBarIcon: ({size, focused, color}) => (
            <SvgPath.DocsIcon width={size} height={size} fill={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
