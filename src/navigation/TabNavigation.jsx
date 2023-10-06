import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HomeScreen from '../screens/home/HomeScreen';
import OnBoardingScreen from '../screens/onBoarding/OnBoardingScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';
import WalletScreen from '../screens/wallet/WalletScreen';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Entypo';
import IconHome from 'react-native-vector-icons/Foundation';
import Wallet from 'react-native-vector-icons/Ionicons';
import User from 'react-native-vector-icons/AntDesign';
import StaticsScreen from '../screens/statics/StaticsScreen';

const TabNavigation = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {backgroundColor: '#f2f2f2'},
        tabBarActiveTintColor: '#000000',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            const iconColor = focused ? '#2e7e78' : '#AAAAAA';
            return <IconHome name="home" size={30} color={iconColor} />;
          },
        })}
      />
      <Tab.Screen
        name="StaticsScreen"
        component={StaticsScreen}
        options={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            const iconColor = focused ? '#2e7e78' : '#AAAAAA';

            return <Icon name="bar-graph" size={30} color={iconColor} />;
          },
        })}
      />

      <Tab.Screen
        name="WalletScreen"
        component={WalletScreen}
        options={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            const iconColor = focused ? '#2e7e78' : '#AAAAAA';

            return <Wallet name="wallet-outline" size={30} color={iconColor} />;
          },
        })}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            const iconColor = focused ? '#2e7e78' : '#AAAAAA';

            return <User name="user" size={30} color={iconColor} />;
          },
        })}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({});
