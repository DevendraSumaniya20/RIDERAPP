import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import NavigationString from '../Constants/NavigationString';
import MapScreen from '../Screens/MapScreen/MapScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Fontisto from 'react-native-vector-icons/Fontisto';
import CartScreen from '../Screens/CartScreen/CartScreen';
import ProfileScreen from '../Screens/ProfileScreen/ProfileScreen';
import CheckOutScreen from '../Screens/CheckOutScreen/CheckOutScreen';
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from '../Styles/ResponsiveSize';
import Color from '../Styles/Color';

const Tab = createBottomTabNavigator();

const FloatingTabBar = ({state, descriptors, navigation}) => {
  const [selectedTab, setSelectedTab] = useState(
    state.routes[state.index].name,
  );

  const handlePress = routeName => {
    setSelectedTab(routeName);
    navigation.navigate(routeName);
  };

  return (
    <View style={styles.tabBarContainer}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const iconSize = textScale(28);

        return (
          <TouchableOpacity
            key={index}
            onPress={() => handlePress(route.name)}
            style={[
              styles.tabBarButton,
              {backgroundColor: isFocused ? '#4E4AF2' : 'transparent'},
            ]}>
            {route.name === NavigationString.HOME && (
              <MaterialIcons
                name="pedal-bike"
                size={iconSize}
                color={isFocused ? '#fff' : Color.DarkBlack}
              />
            )}
            {route.name === NavigationString.MAP && (
              <Ionicons
                name="map"
                size={iconSize}
                color={isFocused ? '#fff' : Color.DarkBlack}
              />
            )}
            {route.name === NavigationString.CART && (
              <Ionicons
                name="cart"
                size={iconSize}
                color={isFocused ? '#fff' : Color.DarkBlack}
              />
            )}
            {route.name === NavigationString.PROFILE && (
              <FontAwesome6
                name="user"
                size={iconSize}
                color={isFocused ? '#fff' : Color.DarkBlack}
              />
            )}
            {route.name === NavigationString.CHECKOUT && (
              <Fontisto
                name="file-1"
                size={iconSize}
                color={isFocused ? '#fff' : Color.DarkBlack}
              />
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const TabNavigation = () => {
  return (
    <Tab.Navigator
      tabBar={props => <FloatingTabBar {...props} />}
      screenOptions={{tabBarShowLabel: false, headerShown: false}}>
      <Tab.Screen name={NavigationString.HOME} component={HomeScreen} />
      <Tab.Screen name={NavigationString.MAP} component={MapScreen} />
      <Tab.Screen name={NavigationString.CART} component={CartScreen} />
      <Tab.Screen name={NavigationString.PROFILE} component={ProfileScreen} />
      <Tab.Screen name={NavigationString.CHECKOUT} component={CheckOutScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'transparent',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingTop: moderateScaleVertical(4),
  },
  tabBarButton: {
    padding: moderateScale(6),
    borderRadius: 10,
    overflow: 'hidden',
  },
});

export default TabNavigation;
