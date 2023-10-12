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
import CreditCard from '../../assets/Images/creditcard.svg';
import Dot from '../../assets/Images/dot.svg';
import PaypalIcon from '../../assets/Images/paypalogo.svg';
import EmptyDot from '../../assets/Images/emptyDot.svg';
import Rectangular from '../../assets/Images/Rectangle.svg';
import Ellipse from '../../assets/Images/Ellipse.svg';
import Notification from '../../assets/Images/notification.svg';
import LessThan from '../../assets/Images/lessThan.png';

const BillDetails = ({navigation}) => {
  const styles = useStyles();
  return (
    <View style={{height: '100%',backgroundColor:'white'}}>
      <View>
        <View style={styles.container_inner}>
          <Rectangular />
          <Ellipse style={styles.eelispse} />
        </View>
        <View style={styles.images_conatiner}>
        <TouchableOpacity
            onPress={() => navigation.push('IncomeScreen')}>
            <View style={styles.lessthen}>
              <Image style={{width: 23, height: 23}} source={LessThan} />
            </View>
          </TouchableOpacity>
          <View>
            <Text style={styles.billText}>Bill Details</Text>
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
            <Text style={styles.youtubeText}>Youtube Premium</Text>
            <Text style={styles.youtubeText_below}>Feb 28, 2022</Text>
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

        <View style={styles.selectMethod}>
          <Text style={styles.selectMethodText}>Select payment method</Text>
        </View>

        <View style={styles.card_container}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={styles.circle_bank}>
              <CreditCard />
            </View>
            <View>
              <Text style={styles.bankLink}>Debit Card</Text>
            </View>
          </View>
          <View style={styles.circletck}>
            <Dot />
          </View>
        </View>

        <View style={styles.card_container_paypal}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={styles.circle_bank}>
              <PaypalIcon />
            </View>
            <View>
              <Text style={styles.paypalLink}>Paypal</Text>
            </View>
          </View>
          <View style={styles.circletck}>
            <EmptyDot />
          </View>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('BillPayment')}>
          <View style={styles.bttn}>
            <Text style={styles.bttnText}>Pay Now</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BillDetails;

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

    youtube_Container: {
      flexDirection: 'row',

      alignItems: 'center',
      marginTop: width > 400 ? 30 : 20,
      marginLeft: 30,
    },
    imge_container: {
      backgroundColor: '#fafafa',
      width: width > 400 ? 80 : 60,
      height: width > 400 ? 80 : 60,
      alignItems: 'center',
      borderRadius: 40,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 15,
    },
    youtube_image: {
      width: width > 400 ? 40 : 35,
      height: width > 400 ? 40 : 35,
    },

    youtubeText: {
      fontSize: width > 400 ? 18 : 14,
      fontFamily: 'InterSemiBold',
      color: '#000000',
    },
    billText: {
      color: '#ffffff',
      fontSize: width > 400 ? 18 : 14,
      fontFamily: 'InterSemiBold',
    },
    youtubeText_below: {
      fontSize: width > 400 ? 14 : 12,
      fontFamily: 'InterRegular',
      color: '#666666',
    },
    below_conatent: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    line1: {
      borderTopWidth: 1,
      borderTopColor: '#DDDDDD',
      marginVertical: width > 400 ? 20 : 15,
    },
    priceFeeConatiner: {
      marginTop: width > 400 ? 43 : 20,
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
    card_container: {
      backgroundColor: '#4388831a',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderRadius: 20,

      marginHorizontal: 35,
    },
    circle_bank: {
      marginTop: 15,
      marginBottom: 15,
      marginLeft: 20,
      marginRight: 15,
      width: width > 400 ? 60 : 45,
      height: width > 400 ? 60 : 45,
      backgroundColor: '#ffffff',
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center',
    },
    bankLink: {
      fontSize: width > 400 ? 16 : 12,
      color: '#438883',
      fontFamily: 'InterSemiBold',
    },
    paypalLink: {
      fontSize: width > 400 ? 16 : 12,
      color: '#888888',
      fontFamily: 'InterSemiBold',
    },
    othertext_contents: {
      color: '#438883',
      fontSize: 12,
      fontFamily: 'InterMedium',
      marginRight: 50,
      marginTop: 4,
    },
    circletck: {
      marginRight: 20,
    },
    card_container_paypal: {
      backgroundColor: '#FAFAFA',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderRadius: 20,

      marginHorizontal: 35,
      marginTop: 15,
    },
    selectMethod: {
      marginTop: width > 400 ? 42 : 25,
      marginBottom: 20,
      marginLeft: 30,
    },
    selectMethodText: {
      color: '#000000',
      fontSize: width > 400 ? 18 : 14,
      fontFamily: 'InterMedium',
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
  });
}
