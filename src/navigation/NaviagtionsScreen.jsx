import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
// import HomeScreen from '../screens/home/HomeScreen';
// import OnBoardingScreen from '../screens/onBoarding/OnBoardingScreen';
// import ProfileScreen from '../screens/profile/ProfileScreen';
// import WalletScreen from '../screens/wallet/WalletScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WalletScreen_upcomingBills from '../screens/wallet/WalletScreen_upcomingBills';

import TabNavigation from './TabNavigation';
import CardWalletScreen from '../screens/wallet/CardWalletScreen';
import AccountsWallet from '../screens/wallet/AccountsWallet';
import IncomeScreen from '../screens/wallet/IncomeScreen';
import BillDetails from '../screens/wallet/BillDetails';
import BillPayment from '../screens/wallet/BillPayment';
import BillPaymentSuccessful from '../screens/wallet/BillPaymentSuccessful';





const NaviagtionsScreen = () => {
  // const Stack = createNativeStackNavigator();
  // const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();
  
  return (
  
    <NavigationContainer >
       <Stack.Navigator screenOptions={{ headerShown: false,ShowLabel:false }}> 
        {/* <Stack.Screen name='WalletScreen' component={WalletScreen}/> */}
        <Stack.Screen name='TabNavigation' component={TabNavigation}/>
        <Stack.Screen name='WalletScreen_upcomingBills' component={WalletScreen_upcomingBills}/>
        <Stack.Screen name='CardWalletScreen' component={CardWalletScreen}/>
        <Stack.Screen name='AccountsWallet' component={AccountsWallet}/>
        <Stack.Screen name='IncomeScreen' component={IncomeScreen}/>
        <Stack.Screen name='BillDetails' component={BillDetails}/>
        <Stack.Screen name='BillPayment' component={BillPayment}/>
        <Stack.Screen name='BillPaymentSuccessful' component={BillPaymentSuccessful}/>
        
      </Stack.Navigator>
      
     
    </NavigationContainer>
  );
};

export default NaviagtionsScreen;

const styles = StyleSheet.create({
  
});
