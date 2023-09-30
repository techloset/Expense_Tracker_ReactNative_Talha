import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HomeScreen from '../screens/home/HomeScreen';
import OnBoardingScreen from '../screens/onBoarding/OnBoardingScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';
import WalletScreen from '../screens/wallet/WalletScreen';

import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const NaviagtionsScreen = () => {
  // const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  
  return (
  
    <NavigationContainer >
      <Tab.Navigator  screenOptions={{headerShown:false ,headerStyle: { backgroundColor: 'blue' }}}>
        <Tab.Screen name="WalletScreen" component={WalletScreen} />
        <Tab.Screen  name="Home" component={HomeScreen} />
        <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
        <Tab.Screen name="OnBoarding" component={OnBoardingScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default NaviagtionsScreen;

const styles = StyleSheet.create({
  
});
