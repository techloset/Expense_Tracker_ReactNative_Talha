import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import React from 'react';

import UpIcon from '../../assets/Images/upIcon.svg';
import PaymentTick from '../../assets/Images/paymentTick.svg';
import Rectangular from '../../assets/Images/Rectangle.svg';
import Ellipse from '../../assets/Images/Ellipse.svg';
import Notification from '../../assets/Images/notification.svg';
import LessThan from '../../assets/Images/left.svg';

import PaymentFile from './Payment.json';

const BillPaymentSuccessful = ({navigation}) => {
  const styles = useStyles();
  return (
    <SafeAreaView style={{height: '100%', backgroundColor: 'white'}}>
      <View>
        <View style={styles.container_inner}>
          <Rectangular />
          <Ellipse style={styles.eelispse} />
        </View>
        <View style={styles.images_conatiner}>
          <TouchableOpacity onPress={() => navigation.push('BillPayment')}>
            <View style={styles.lessthen}>
              <LessThan />
            </View>
          </TouchableOpacity>
          <View>
            <Text style={styles.billPaymet}>Bill Payment</Text>
          </View>
          <View style={styles.notification}>
            <Notification />
          </View>
        </View>
      </View>

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
                        index === 1 ? {color: '#438883'} : {},
                      ]}>
                      {item.value}
                    </Text>
                  </View>
                </View>
                {index === 3 && <View style={styles.line1} />}
                {index === 5 && <View style={styles.line1} />}
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
    container: {
      position: 'absolute',
      backgroundColor: 'white',

      width: '100%',

      marginTop: 156,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
    },
    up_container: {
      width: width > 400 ? 80 : 60,
      height: width > 400 ? 80 : 60,
      backgroundColor: '#fafafa',
      borderRadius: 40,
      marginTop: width > 400 ? 20 : 15,
      justifyContent: 'center',
      alignItems: 'center',
    },
    income_container: {
      marginTop: width > 400 ? 10 : 8,
    },
    textt: {
      color: '#438883',
      fontFamily: 'InterSemiBold',
      fontSize: width > 400 ? 22 : 16,
    },
    value: {
      color: '#666666',
      fontFamily: 'InterMedium',
      fontSize: width > 400 ? 16 : 12,
    },
    indivdial_contianer: {
      flexDirection: 'row',
      marginHorizontal: 30,
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    container_text: {
      color: '#666666',
      fontSize: width > 400 ? 16 : 12,
      fontFamily: 'InterMedium',
    },
    from_container: {
      marginTop: width > 400 ? 12 : 14,
    },
    other_container: {
      marginTop: 12,
    },
    container_text_other: {
      color: '#000000',
      fontFamily: 'InterMedium',
      fontSize: width > 400 ? 16 : 12,
    },
    container_text_other_income: {
      color: '#000000',
      fontFamily: 'InterSemiBold',
      fontSize: width > 400 ? 16 : 12,
    },
    container_text_total: {
      fontFamily: 'InterSemiBold',
      fontSize: width > 400 ? 16 : 12,
      color: '#666666',
    },
    transtionText: {
      fontSize: width > 400 ? 18 : 14,
      fontFamily: 'InterMedium',
      color: '#000000',
    },
    transtionContainer_main: {marginTop: width > 400 ? 32 : 24},
    container_text_other_total: {
      fontFamily: 'InterSemiBold',
      fontSize: width > 400 ? 16 : 12,
      color: '#000000',
      fontWeight: '600',
    },
    line1: {
      borderTopWidth: 1,
      borderTopColor: '#DDDDDD',
      marginTop: width > 400 ? 20 : 12,
      marginHorizontal: 30,
      marginBottom: width > 400 ? 8 : 0,
    },
    bttn: {
      width: width > 400 ? 358 : '85%',
      height: width > 400 ? 60 : 45,
      borderRadius: 40,
      paddingHorizontal: 20,
      paddingVertical: 10,
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 28,
      marginTop: width > 400 ? 30 : 15,
      borderWidth: 1,
      borderColor: '#438883',
      borderStyle: 'solid',
    },
    bttnText: {
      color: '#438883',
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
    billPaymet: {
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
