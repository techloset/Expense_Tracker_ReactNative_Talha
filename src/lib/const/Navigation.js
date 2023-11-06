import OnboardingScreen from '../../screens/onBoarding/OnBoardingScreen';
import TabNavigation from '../../navigation/TabNavigation';
import WalletScreen_upcomingBills from '../../screens/wallet/WalletScreen_upcomingBills';
import CardWalletScreen from '../../screens/wallet/CardWalletScreen';
import AccountsWallet from '../../screens/wallet/AccountsWallet';
import IncomeScreen from '../../screens/wallet/IncomeScreen';
import BillDetails from '../../screens/wallet/BillDetails';
import BillPayment from '../../screens/wallet/BillPayment';
import BillPaymentSuccessful from '../../screens/wallet/BillPaymentSuccessful';
import StaticScreentwo from '../../screens/statics/StaticScreentwo';
import SCREENS from './Screen';

const NAVIGATION = [
  {
    screenName: SCREENS.ONBOARDING,
    component: OnboardingScreen,
  },
  {
    screenName: SCREENS.TabNavigation,
    component: TabNavigation,
  },
  {
    screenName: SCREENS.WalletScreen_upcomingBills,
    component: WalletScreen_upcomingBills,
  },
  {
    screenName: SCREENS.CardWalletScreen,
    component: CardWalletScreen,
  },
  {
    screenName: SCREENS.AccountsWallet,
    component: AccountsWallet,
  },
  {
    screenName: SCREENS.IncomeScreen,
    component: IncomeScreen,
  },
  {
    screenName: SCREENS.BillDetails,
    component: BillDetails,
  },
  {
    screenName: SCREENS.BillPayment,
    component: BillPayment,
  },
  {
    screenName: SCREENS.BillPaymentSuccessful,
    component: BillPaymentSuccessful,
  },
  {
    screenName: SCREENS.StaticScreentwo,
    component: StaticScreentwo,
  },
];

export default NAVIGATION;
