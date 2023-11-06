import HomeScreen from '../../screens/home/HomeScreen';
import StaticsScreen from '../../screens/statics/StaticsScreen';
import WalletScreen from '../../screens/wallet/WalletScreen';
import ProfileScreen from '../../screens/profile/ProfileScreen';

export const tabData = [
  {
    name: 'Home',
    component: HomeScreen,
    icon: 'home',
  },
  {
    name: 'StaticsScreen',
    component: StaticsScreen,
    icon: 'bar-graph',
  },
  {
    name: 'WalletScreen',
    component: WalletScreen,
    icon: 'wallet-outline',
  },
  {
    name: 'ProfileScreen',
    component: ProfileScreen,
    icon: 'user',
  },
];
