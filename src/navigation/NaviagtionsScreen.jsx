import {StyleSheet} from 'react-native';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WalletScreen_upcomingBills from '../screens/wallet/WalletScreen_upcomingBills';
import TabNavigation from './TabNavigation';
import CardWalletScreen from '../screens/wallet/CardWalletScreen';
import AccountsWallet from '../screens/wallet/AccountsWallet';
import IncomeScreen from '../screens/wallet/IncomeScreen';
import BillDetails from '../screens/wallet/BillDetails';
import BillPayment from '../screens/wallet/BillPayment';
import BillPaymentSuccessful from '../screens/wallet/BillPaymentSuccessful';
import OnBoardingScreen from '../screens/onBoarding/OnBoardingScreen';
import StaticScreentwo from '../screens/statics/StaticScreentwo';

const NaviagtionsScreen = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="OnBoardingScreen" component={OnBoardingScreen} />
        <Stack.Screen name="TabNavigation" component={TabNavigation} />
        <Stack.Screen
          name="WalletScreen_upcomingBills"
          component={WalletScreen_upcomingBills}
        />
        <Stack.Screen name="CardWalletScreen" component={CardWalletScreen} />
        <Stack.Screen name="AccountsWallet" component={AccountsWallet} />
        <Stack.Screen name="IncomeScreen" component={IncomeScreen} />
        <Stack.Screen name="BillDetails" component={BillDetails} />
        <Stack.Screen name="BillPayment" component={BillPayment} />
        <Stack.Screen
          name="BillPaymentSuccessful"
          component={BillPaymentSuccessful}
        />
        <Stack.Screen name="StaticScreentwo" component={StaticScreentwo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NaviagtionsScreen;

const styles = StyleSheet.create({});
