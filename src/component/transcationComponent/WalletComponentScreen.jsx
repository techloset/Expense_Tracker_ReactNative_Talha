import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import Rectangular from '../../assets/Images/Rectangle.svg';
import Ellipse from '../../assets/Images/Ellipse.svg';
import Notification from '../../assets/Images/notification.svg';
import LessThan from '../../assets/Images/lessThan.png';

const WalletComponentScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container_inner}>
        <Rectangular />
        <Ellipse style={styles.eelispse} />
      </View>
      <View style={styles.images_conatiner}>
        <View style={styles.lessthen}>
          <Image style={{width:23,height:23}} source={LessThan} />
        </View>
      
        <View style={styles.notification}>
          <Notification />
        </View>
      </View>
    </View>
  );
};

export default WalletComponentScreen;

const styles = StyleSheet.create({
 
  eelispse: {
    position: 'absolute',
   
  },
  images_conatiner: {
    flex:1,
    position:'absolute',
    width:'100%',
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems:'center',
    marginTop:78,
  },

  notification: {
    width: 40,
    height: 40,
    borderRadius: 6.67,
    padding: 8.33,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight:24,
  },
  lessthen:{
    marginLeft:24,
  },
});
