import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import TransactionScreen from '../../component/transcationComponent/TransactionScreen';
import Rectangular from '../../assets/Images/Rectangle.svg';
import Ellipse from '../../assets/Images/Ellipse.svg';
import Notification from '../../assets/Images/notification.svg';
import LessThan from '../../assets/Images/left.svg';
import {COLOR, FONT_FAMILY} from '../../lib/styles/GlobalStyles';
const WalletScreen = ({navigation}) => {
  const styles = useStyles();
  return (
    <SafeAreaView>
      <View>
        <View style={styles.container_inner}>
          <Rectangular />
          <Ellipse style={styles.eelispse} />
        </View>
        <View style={styles.images_conatiner}>
          <TouchableOpacity>
            <View style={styles.lessthen}>
              <LessThan />
            </View>
          </TouchableOpacity>
          <View>
            <Text style={styles.billText}>Wallet</Text>
          </View>
          <View style={styles.notification}>
            <Notification />
          </View>
        </View>
      </View>
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
      // height:"full"
    },

    eelispse: {
      position: 'absolute',
    },
    images_conatiner: {
      flex: 1,
      position: 'absolute',
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 78,
    },

    billText: {
      color: COLOR.white,
      fontSize: width > 400 ? 18 : 14,
      fontFamily: FONT_FAMILY.interSemiBold,
      fontWeight:"600"
    },

    notification: {
      width: 40,
      height: 40,
      borderRadius: 6.67,
      padding: 8.33,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 24,
    },
    lessthen: {
      marginLeft: 24,
    },
  });
}
