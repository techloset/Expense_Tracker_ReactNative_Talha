import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  useWindowDimensions,
  Image,
  ImageBackground,
} from 'react-native';
import React from 'react';
import Copy from '../../assets/Images/copy.png';

import UpIcon from '../../assets/Images/upIcon.svg';
import PaymentTick from '../../assets/Images/paymentTick.svg';
import Ellipse from '../../assets/Images/Ellipse.svg';
import Notification from '../../assets/Images/notification.svg';
import LessThan from '../../assets/Images/left.svg';
import PaymentFile from '../../lib/const/Payment.json';
import {COLOR, FONT_FAMILY} from '../../lib/styles/GlobalStyles';
import Home_background from '../../assets/Images/Home_background.png';

const BillPaymentSuccessful = ({navigation}) => {
  const styles = useStyles();
  return (
    <SafeAreaView style={{height: '100%', backgroundColor: COLOR.white}}>
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
            <TouchableOpacity onPress={() => navigation.push('BillPayment')}>
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
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <View style={styles.up_container}>
            <PaymentTick style={styles.up} />
          </View>
          <View style={styles.income_container}>
            <Text style={styles.textt}>Payment Successfully</Text>
          </View>
          <Text style={styles.value}>Youtube Premium</Text>
        </View>
        <View style={styles.transtionContainer_main}>
          <View style={styles.indivdial_contianer}>
            <View>
              <Text style={styles.transtionText}>Transaction details</Text>
            </View>
            <View>
              <UpIcon />
            </View>
          </View>

          {PaymentFile.map((item, index) => {
            return (
              <View key={index}>
                <View
                  style={[styles.indivdial_contianer, styles.from_container]}>
                  <View>
                    <Text style={styles.container_text}>{item.name}</Text>
                  </View>
                  <View>
                    <Text
                      style={[
                        styles.container_text_other_income,
                        index === 1 ? {color: COLOR.green} : {},
                      ]}>
                      {item.name === 'Transcation ID' ? (
                        <View
                          style={{flexDirection: 'row', alignItems: 'center'}}>
                          <Text>{item.value}</Text>
                          <Image source={Copy} />
                        </View>
                      ) : (
                        item.value
                      )}
                    </Text>
                  </View>
                </View>
                {index === 4 && <View style={styles.line1} />}
                {index === 6 && <View style={styles.line1} />}
              </View>
            );
          })}
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <View style={styles.bttn}>
            <Text style={styles.bttnText}>Share Reciept</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default BillPaymentSuccessful;

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
      marginTop: 156,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
    },
    up_container: {
      width: width > 400 ? 80 : 60,
      height: width > 400 ? 80 : 60,
      backgroundColor: COLOR.LightWhite,
      borderRadius: 40,
      marginTop: width > 400 ? 20 : 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    income_container: {
      marginTop: width > 400 ? 10 : 5,
    },
    textt: {
      color: COLOR.green,
      fontFamily: FONT_FAMILY.interSemiBold,
      fontSize: width > 400 ? 22 : 18,
    },
    value: {
      color: COLOR.SecondaryGrey,
      fontFamily: FONT_FAMILY.interMedium,
      fontSize: width > 400 ? 16 : 12,
    },
    indivdial_contianer: {
      flexDirection: 'row',
      marginHorizontal: 30,
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    container_text: {
      color: COLOR.SecondaryGrey,
      fontSize: width > 400 ? 16 : 12,
      fontFamily: FONT_FAMILY.interMedium,
    },
    from_container: {
      marginTop: width > 400 ? 12 : 12,
    },
    container_text_other_income: {
      color: COLOR.black,
      fontFamily: FONT_FAMILY.interSemiBold,
      fontSize: width > 400 ? 16 : 12,
    },
    
    transtionText: {
      fontSize: width > 400 ? 18 : 14,
      fontFamily: FONT_FAMILY.interMedium,
      color: COLOR.black,
    },
    transtionContainer_main: {
      marginTop: width > 400 ? 32 : 25,
    },
    
    line1: {
      borderTopWidth: 1,
      borderTopColor: COLOR.borderColor,
      marginTop: width > 400 ? 20 : 12,
      marginHorizontal: 30,
      marginBottom: width > 400 ? 8 : 0,
    },
    bttn: {
      width: width > 400 ? 358 : '85%',
      height: width > 400 ? 60 : 50,
      borderRadius: 40,
      paddingHorizontal: 20,
      paddingVertical: 10,
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 28,
      marginTop: width > 400 ? 30 : 25,
      borderWidth: 1,
      borderColor: COLOR.green,
      borderStyle: 'solid',
    },
    bttnText: {
      color: COLOR.green,
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
    billPaymet: {
      color: COLOR.white,
      fontSize: width > 400 ? 18 : 18,
      fontFamily: FONT_FAMILY.interSemiBold,
      fontWeight: '600',
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
