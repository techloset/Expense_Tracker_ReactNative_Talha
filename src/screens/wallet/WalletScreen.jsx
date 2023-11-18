import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  useWindowDimensions,
  ImageBackground,
} from 'react-native';
import TransactionScreen from '../../component/transcationComponent/TransactionScreen';
import Ellipse from '../../assets/Images/Ellipse.svg';
import Notification from '../../assets/Images/notification.svg';
import LessThan from '../../assets/Images/left.svg';
import {COLOR, FONT_FAMILY} from '../../lib/styles/GlobalStyles';
import Home_background from '../../assets/Images/Home_background.png';

const WalletScreen = ({navigation}) => {
  const styles = useStyles();
  return (
    <SafeAreaView>
      <ImageBackground style={styles.imageBackground} source={Home_background}>
        <View style={{position: 'absolute'}}>
          <Ellipse />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 78,
            marginHorizontal: 24,
          }}>
          <View style={{}}>
            <LessThan />
          </View>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '600',
              fontFamily: FONT_FAMILY.interSemiBold,
              color: COLOR.white,
            }}>
            Wallet
          </Text>
          <Notification />
        </View>
      </ImageBackground>
      <View style={styles.container}>
        <TransactionScreen navigation={navigation} />
      </View>
    </SafeAreaView>
  );
};

export default WalletScreen;

function useStyles() {
  const {width, height} = useWindowDimensions();
  return StyleSheet.create({
    container: {
      position: 'absolute',
      backgroundColor: COLOR.white,
      width: '100%',
      marginTop: 165,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      height: 'full',
    },

    imageBackground: {
      height: width > 400 ? 287 : 287,
    },
  });
}
