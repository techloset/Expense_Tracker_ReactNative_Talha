import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  useWindowDimensions,
  Dimensions,
} from 'react-native';
import React from 'react';
import youtubeCardBills from '../../assets/Images/youtubeCardBills.png';
import Rectangular from '../../assets/Images/Rectangle.svg';
import Ellipse from '../../assets/Images/Ellipse.svg';
import Notification from '../../assets/Images/notification.svg';
import LessThan from '../../assets/Images/lessThan.png';

const BillPayment = ({navigation}) => {
  const styles = useStyles();
  return (
    <View>
      <View>
        <View style={styles.container_inner}>
          <Rectangular />
          <Ellipse style={styles.eelispse} />
        </View>
        <View style={styles.images_conatiner}>
        <TouchableOpacity
            onPress={() => navigation.push('BillDetails')}>
            <View style={styles.lessthen}>
              <Image style={{width: 23, height: 23}} source={LessThan} />
            </View>
          </TouchableOpacity>
          <View>
            <Text style={styles.billText}>Bill Payment</Text>
          </View>
          <View style={styles.notification}>
            <Notification />
          </View>
        </View>
      </View>

      {/* <WalletComponentScreen /> */}

      <View style={styles.container}>
        <View style={styles.youtube_Container}>
          <View style={styles.imge_container}>
            <Image style={styles.youtube_image} source={youtubeCardBills} />
          </View>

          <View>
            <Text style={styles.youtubeText}>
              You will pay{' '}
              <Text style={{color: '#438883'}}>Youtube Premium</Text> for one
              month with BCA OneKlik
            </Text>
          </View>
        </View>

        <View style={styles.priceFeeConatiner}>
          <View style={styles.below_conatent}>
            <Text style={[styles.priceFeeText, styles.priceText]}>Price</Text>
            <Text style={styles.priceFeeValue}>$ 11.99</Text>
          </View>

          <View style={styles.below_conatent}>
            <Text style={styles.priceFeeText}>Fee</Text>
            <Text style={styles.priceFeeValue}>$ 1.99</Text>
          </View>
          <View style={styles.line1}></View>
          <View style={styles.below_conatent}>
            <Text style={styles.TotalText}>Total</Text>
            <Text style={styles.Totalvalue}>$ 13.98</Text>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate('BillPaymentSuccessful')}>
          <View style={styles.bttn}>
            <Text style={styles.bttnText}>Confirm and Pay Now</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BillPayment;

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

    youtube_image: {},
    imge_container: {
      backgroundColor: '#fafafa',
      width: width > 400 ? 80 : 60,
      height: width > 400 ? 80 : 60,
      alignItems: 'center',
      borderRadius: 40,
      justifyContent: 'center',
      alignItems: 'center',
    },
    youtube_Container: {
      alignItems: 'center',
      marginTop: width > 400 ? 30 : 20,
    },
    youtubeText: {
      fontSize: width > 400 ? 20 : 14,
      fontFamily: 'InterRegular',
      color: '#000000',
      marginHorizontal: 58,
      textAlign: 'center',
      width: width > 400 ? 315 : 255,
    },

    below_conatent: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    line1: {
      borderTopWidth: 1,
      borderTopColor: '#DDDDDD',
      marginVertical: width > 400 ? 20 : 20,
      // marginHorizontal: 30,
    },
    priceFeeConatiner: {
      // backgroundColor:'brown',
      marginTop: 43,
      marginHorizontal: 30,
    },
    priceFeeText: {
      color: '#666666',
      fontSize: width > 400 ? 16 : 14,
      fontFamily: 'InterMedium',
    },
    TotalText: {
      color: '#666666',
      fontSize: width > 400 ? 16 : 14,
      fontFamily: 'InterSemiBold',
    },
    priceFeeValue: {
      color: '#000000',
      fontSize: width > 400 ? 16 : 14,
      fontFamily: 'InterMedium',
    },
    Totalvalue: {
      color: '#000000',
      fontSize: width > 400 ? 16 : 14,
      fontFamily: 'InterSemiBold',
    },
    priceText: {
      marginBottom: 12,
    },
    bttn: {
      width: width > 400 ? 358 : '85%',
      height: width > 400 ? 60 : 45,
      backgroundColor: '#69AEA9',
      borderRadius: 40,
      paddingHorizontal: 20,
      paddingVertical: 10,
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 28,
      marginTop: width > 400 ? 30 : 15,
      marginTop:width>400?218:160,
    },
    bttnText: {
      color: '#ffffff',
      fontSize: width > 400 ? 18 : 14,
      fontFamily: 'InterSemiBold',
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
    billText: {
      color: '#ffffff',
      fontSize: width > 400 ? 18 : 14,
      fontFamily: 'InterSemiBold',
    },
  });
}
