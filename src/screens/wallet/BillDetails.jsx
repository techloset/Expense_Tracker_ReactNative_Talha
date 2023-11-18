import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  useWindowDimensions,
  ImageBackground,
} from 'react-native';
import React from 'react';
import youtubeCardBills from '../../assets/Images/youtubeCardBills.png';
import CreditCard from '../../assets/Images/creditcard.svg';
import Dot from '../../assets/Images/dot.svg';
import PaypalIcon from '../../assets/Images/paypalogo.svg';
import EmptyDot from '../../assets/Images/emptyDot.svg';
import Ellipse from '../../assets/Images/Ellipse.svg';
import Notification from '../../assets/Images/notification.svg';
import LessThan from '../../assets/Images/left.svg';
import {COLOR, FONT_FAMILY} from '../../lib/styles/GlobalStyles';
import Home_background from '../../assets/Images/Home_background.png';

const BillDetails = ({navigation}) => {
  const styles = useStyles();
  return (
    <View style={{height: '100%', backgroundColor: COLOR.white}}>
      <ImageBackground
          style={styles.imageBackground}
          source={Home_background}>
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
              <TouchableOpacity
                onPress={() => navigation.push('IncomeScreen')}>
                <View>
                  <LessThan />
                </View>
              </TouchableOpacity>
            </View>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '600',
                fontFamily: FONT_FAMILY.interSemiBold,
                color: COLOR.white,
              }}>
              Bill Details
            </Text>
            <Notification />
          </View>
        </ImageBackground>

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
              <Text style={styles.paypalText}>Paypal</Text>
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
  const {width} = useWindowDimensions();
  return StyleSheet.create({
    imageBackground: {
      height: width > 400 ? 287 : 287,
    },
    container: {
      position: 'absolute',
      backgroundColor: COLOR.white,
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
      backgroundColor: COLOR.LightWhite,
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
      fontSize: width > 400 ? 18 : 16,
      fontFamily: FONT_FAMILY.interSemiBold,
      color: COLOR.black,
    },
    billText: {
      color: COLOR.white,
      fontSize: width > 400 ? 18 : 18,
      fontFamily: FONT_FAMILY.interSemiBold,
    },
    youtubeText_below: {
      fontSize: width > 400 ? 14 : 14,
      fontFamily: FONT_FAMILY.interRegular,
      color: COLOR.SecondaryGrey,
    },
    below_conatent: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    line1: {
      borderTopWidth: 1,
      borderTopColor: COLOR.borderColor,
      marginVertical: width > 400 ? 20 : 15,
    },
    priceFeeConatiner: {
      marginTop: width > 400 ? 43 : 43,
      marginHorizontal: 30,
    },
    priceFeeText: {
      color: COLOR.SecondaryGrey,
      fontSize: width > 400 ? 16 : 16,
      fontFamily: FONT_FAMILY.interMedium,
    },
    TotalText: {
      color: COLOR.SecondaryGrey,
      fontSize: width > 400 ? 16 : 14,
      fontFamily: FONT_FAMILY.interBold,
    },
    priceFeeValue: {
      color: COLOR.black,
      fontSize: width > 400 ? 16 : 14,
      fontFamily: FONT_FAMILY.interMedium,
    },
    Totalvalue: {
      color: COLOR.black,
      fontSize: width > 400 ? 16 : 14,
      fontFamily: FONT_FAMILY.interSemiBold,
    },
    priceText: {
      marginBottom: 12,
    },
    card_container: {
      backgroundColor: COLOR.shadeGray,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginHorizontal: 35,
      borderRadius: 20,
    },
    circle_bank: {
      marginTop: 15,
      marginBottom: 15,
      marginLeft: 20,
      marginRight: 15,
      width: width > 400 ? 60 : 45,
      height: width > 400 ? 60 : 45,
      backgroundColor: COLOR.white,
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center',
    },
    bankLink: {
      fontSize: width > 400 ? 16 : 14,
      color: COLOR.green,
      fontFamily: FONT_FAMILY.interSemiBold,
    },
    paypalText: {
      fontSize: width > 400 ? 16 : 14,
      color: COLOR.gray,
      fontFamily: FONT_FAMILY.interSemiBold,
    },
    othertext_contents: {
      color: COLOR.green,
      fontSize: 12,
      fontFamily: FONT_FAMILY.interMedium,
      marginRight: 50,
      marginTop: 4,
    },
    circletck: {
      marginRight: 20,
    },
    card_container_paypal: {
      backgroundColor: COLOR.LightWhite,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderRadius: 20,

      marginHorizontal: 35,
      marginTop: 15,
    },
    selectMethod: {
      marginTop: width > 400 ? 42 : 35,
      marginBottom: 20,
      marginLeft: 30,
    },
    selectMethodText: {
      color: COLOR.black,
      fontSize: width > 400 ? 18 : 14,
      fontFamily: FONT_FAMILY.interMedium,
    },
    bttn: {
      width: width > 400 ? 358 : '85%',
      height: width > 400 ? 60 : 50,
      backgroundColor: COLOR.secondary,
      borderRadius: 40,
      paddingHorizontal: 20,
      paddingVertical: 10,
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 28,
      marginTop: width > 400 ? 30 : 25,
      elevation: 10, 
    },
    bttnText: {
      color: COLOR.white,
      fontSize: width > 400 ? 18 : 16,
      fontFamily: FONT_FAMILY.interSemiBold,
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
