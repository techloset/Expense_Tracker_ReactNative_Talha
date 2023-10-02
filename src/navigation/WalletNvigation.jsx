import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import YourComponent from '../components/YourComponent';
// import TransactionScreen from '../component/transcationComponent/TransactionScreen';
import walletScreen_upcomingBills from '../screens/wallet/walletScreen_upcomingBills;'; // Import your upcoming bills screen component
// import WalletScreen from '../screens/wallet/WalletScreen';
const Stack = createStackNavigator();

const MainStackNavigator = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WalletScreen"> {/* 'Home' can be replaced with your initial screen */}
        <Stack.Screen name="TransactionScreen" component={walletScreen_upcomingBills} />
        {/* UpcomingBillsScreen is not added here */}
        {/* <walletScreen_upcomingBills/> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStackNavigator;
