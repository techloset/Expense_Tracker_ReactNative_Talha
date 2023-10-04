import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeScreen from '../screens/home/HomeScreen';
import OnBoardingScreen from '../screens/onBoarding/OnBoardingScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';
import WalletScreen from '../screens/wallet/WalletScreen';
// import IncomeScreen from '../screens/wallet/IncomeScreen';


// import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import CardWalletScreen from '../screens/wallet/CardWalletScreen';
// import WalletScreen_upcomingBills from '../screens/wallet/WalletScreen_upcomingBills';
// import AccountsWallet from '../screens/wallet/AccountsWallet';
// import BillPayment from '../screens/wallet/BillPayment';
// import BillPaymentSuccessful from '../screens/wallet/BillPaymentSuccessful';
// import BillDetails from '../screens/wallet/BillDetails';





const TabNavigation = () => {
    const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator  screenOptions={{headerShown:false ,headerStyle: { backgroundColor: 'blue' }}}>
    <Tab.Screen  name="Home" component={HomeScreen} />
    <Tab.Screen name="OnBoarding" component={OnBoardingScreen} />
    <Tab.Screen name="WalletScreen" component={WalletScreen} />
    <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
  </Tab.Navigator>
  )
}

export default TabNavigation

const styles = StyleSheet.create({})