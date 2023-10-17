import {StyleSheet, Text, View, SafeAreaView, Image,TouchableOpacity,useWindowDimensions,} from 'react-native';
import React from 'react';
// import WalletComponentScreen from '../../component/transcationComponent/WalletComponentScreen';
import TransactionScreen from '../../component/transcationComponent/TransactionScreen';

import Rectangular from '../../assets/Images/Rectangle.svg';
import Ellipse from '../../assets/Images/Ellipse.svg';
import Notification from '../../assets/Images/notification.svg';
import LessThan from '../../assets/Images/lessThan.png';
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
          <TouchableOpacity >
          <View style={styles.lessthen}>
            <Image style={{width: 23, height: 23}} source={LessThan} />
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
      {/* <WalletComponentScreen /> */}

      <View style={styles.container}>
        <TransactionScreen navigation={navigation} />
      </View>
    </SafeAreaView>
  );
};

export default WalletScreen;

function useStyles() {
  const {width, height} = useWindowDimensions();
  // console.log()
  return StyleSheet.create({
  container: {
    
    position: 'absolute',
    backgroundColor: 'white',
    width: '100%',
    marginTop: 165,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
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
    color: '#ffffff',
    fontSize: width > 400 ? 18 : 14,
    fontFamily: 'InterSemiBold',
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
