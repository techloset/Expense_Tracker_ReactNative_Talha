import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Entypo';
import IconHome from 'react-native-vector-icons/Foundation';
import Wallet from 'react-native-vector-icons/Ionicons';
import User from 'react-native-vector-icons/AntDesign';
import {COLOR} from '../lib/styles/GlobalStyles';
import {tabData} from '../lib/const/tabData';

const TabNavigation = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {backgroundColor: COLOR.offwhite},
        tabBarActiveTintColor: COLOR.black,
      }}>
      {tabData.map((tab, index) => (
        <Tab.Screen
          key={index}
          name={tab.name}
          component={tab.component}
          options={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              const iconColor = focused
                ? COLOR.darkGreen
                : COLOR.LightShadowGrey;
              let iconComponent;
              switch (tab.name) {
                case 'Home':
                  iconComponent = (
                    <IconHome name={tab.icon} size={30} color={iconColor} />
                  );
                  break;
                case 'StaticsScreen':
                  iconComponent = (
                    <Icon name={tab.icon} size={30} color={iconColor} />
                  );
                  break;
                case 'WalletScreen':
                  iconComponent = (
                    <Wallet name={tab.icon} size={30} color={iconColor} />
                  );
                  break;
                case 'ProfileScreen':
                  iconComponent = (
                    <User name={tab.icon} size={30} color={iconColor} />
                  );
                  break;
                default:
                  iconComponent = null;
              }
              return iconComponent;
            },
          })}
        />
      ))}
    </Tab.Navigator>
  );
};

export default TabNavigation;

