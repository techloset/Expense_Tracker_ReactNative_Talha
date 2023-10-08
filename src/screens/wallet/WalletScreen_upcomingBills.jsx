import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import UpcommingBills from '../../component/transcationComponent/UpcomingScreen';

import Rectangular from '../../assets/Images/Rectangle.svg';
import Ellipse from '../../assets/Images/Ellipse.svg';
import Notification from '../../assets/Images/notification.svg';
import LessThan from '../../assets/Images/lessThan.png';
const WalletScreen_upcomingBills = ({navigation}) => {
  return (
    <View>
      <View>
        <View style={styles.container_inner}>
          <Rectangular />
          <Ellipse style={styles.eelispse} />
        </View>
        <View style={styles.images_conatiner}>
          <TouchableOpacity onPress={() => navigation.navigate('WalletScreen')}>
            <View style={styles.lessthen}>
              <Image style={{width: 23, height: 23}} source={LessThan} />
            </View>
          </TouchableOpacity>
          <View style={styles.notification}>
            <Notification />
          </View>
        </View>
      </View>
      {/* <WalletComponentScreen/> */}
      <View style={styles.container}>
        <UpcommingBills navigation={navigation} />
      </View>
    </View>
  );
};

export default WalletScreen_upcomingBills;

const styles = StyleSheet.create({
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
