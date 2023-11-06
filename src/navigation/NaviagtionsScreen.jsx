import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NAVIGATION from '../lib/const/Navigation';

const NaviagtionsScreen = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {NAVIGATION.map((item, index) => {
          return (
            <Stack.Screen
              key={index}
              name={item.screenName}
              component={item.component}
            />
          );
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NaviagtionsScreen;
