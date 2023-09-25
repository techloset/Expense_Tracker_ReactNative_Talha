import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HomeScreen from '../screens/home/HomeScreen';
import OnBoardingScreen from '../screens/onBoarding/OnBoardingScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const NaviagtionsScreen = () => {
  const Stack = createNativeStackNavigator();
  return (
  
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="OnBoarding" component={OnBoardingScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NaviagtionsScreen;

const styles = StyleSheet.create({
 
});
