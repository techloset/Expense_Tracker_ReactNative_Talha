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
import Ellipse from '../../assets/Images/Ellipse.svg';
import Notification from '../../assets/Images/notification.svg';
import LessThan from '../../assets/Images/left.svg';
import {COLOR, FONT_FAMILY} from '../../lib/styles/GlobalStyles';
import Home_background from '../../assets/Images/Home_background.png';

const BillPayment = ({navigation}) => {
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
                onPress={() => navigation.push('BillDetails')}>
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
              Bill Payment
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
            <Text style={styles.youtubeText}>
              You will pay{' '}
              <Text style={{color: COLOR.green}}>Youtube Premium</Text> for one
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
    imge_container: {
      backgroundColor: COLOR.LightWhite,
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
      fontSize: width > 400 ? 20 : 16,
      fontFamily: FONT_FAMILY.interRegular,
      color: COLOR.black,
      marginHorizontal: 58,
      textAlign: 'center',
      width: width > 400 ? 315 : 255,
      fontWeight: '400',
    },

    below_conatent: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    line1: {
      borderTopWidth: 1,
      borderTopColor: COLOR.borderColor,
      marginVertical: 20,
    },
    priceFeeConatiner: {
      marginTop: 43,
      marginHorizontal: 30,
    },
    priceFeeText: {
      color: COLOR.SecondaryGrey,
      fontSize: width > 400 ? 16 : 14,
      fontFamily: FONT_FAMILY.interMedium,
      fontWeight: '500',
    },
    TotalText: {
      color: COLOR.SecondaryGrey,
      fontSize: width > 400 ? 16 : 14,
      fontFamily: FONT_FAMILY.interSemiBold,
      fontWeight: '600',
    },
    priceFeeValue: {
      color: COLOR.black,
      fontSize: width > 400 ? 16 : 14,
      fontFamily: FONT_FAMILY.interMedium,
      fontWeight: '500',
    },
    Totalvalue: {
      color: COLOR.black,
      fontSize: width > 400 ? 16 : 14,
      fontFamily: FONT_FAMILY.interBold,
    },
    priceText: {
      marginBottom: 12,
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
      marginTop: width > 400 ? 30 : 15,
      marginTop: width > 400 ? 218 : 160,
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
    billText: {
      color: COLOR.white,
      fontSize: width > 400 ? 18 : 18,
      fontFamily: FONT_FAMILY.interSemiBold,
    },
  });
}
