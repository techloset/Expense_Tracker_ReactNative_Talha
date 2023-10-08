import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  useWindowDimensions,
  Dimensions,
} from 'react-native';
import React from 'react';

import UpIcon from '../../assets/Images/upIcon.svg';
import PaymentTick from '../../assets/Images/paymentTick.svg';

import Rectangular from '../../assets/Images/Rectangle.svg';
import Ellipse from '../../assets/Images/Ellipse.svg';
import Notification from '../../assets/Images/notification.svg';
import LessThan from '../../assets/Images/lessThan.png';

const BillPaymentSuccessful = ({navigation}) => {
  const styles = useStyles();
  return (
    <SafeAreaView>
      <View>
        <View style={styles.container_inner}>
          <Rectangular />
          <Ellipse style={styles.eelispse} />
        </View>
        <View style={styles.images_conatiner}>
        <TouchableOpacity
            onPress={() => navigation.push('BillPayment')}>
            <View style={styles.lessthen}>
              <Image style={{width: 23, height: 23}} source={LessThan} />
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
      {/* <Text>IncomeScreen</Text> */}

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
        {/* style={{marginTop:42}} */}
        <View style={styles.transtionContainer_main}>
          <View style={styles.indivdial_contianer}>
            <View>
              <Text style={styles.transtionText}>Transaction details</Text>
            </View>
            <View>
              <UpIcon />
            </View>
          </View>

          <View style={[styles.indivdial_contianer, styles.from_container]}>
            <View>
              <Text style={styles.container_text}>Payment method</Text>
            </View>
            <View>
              <Text style={styles.container_text_other}>Debit Card</Text>
            </View>
          </View>

          <View style={[styles.indivdial_contianer, styles.other_container]}>
            <View>
              <Text style={styles.container_text}>Status</Text>
            </View>
            <View>
              <Text style={styles.container_text_other_income}>438883</Text>
            </View>
          </View>
          <View style={[styles.indivdial_contianer, styles.other_container]}>
            <View>
              <Text style={styles.container_text}>Time</Text>
            </View>
            <View>
              <Text style={styles.container_text_other}>08:15 AM</Text>
            </View>
          </View>

          <View style={[styles.indivdial_contianer, styles.other_container]}>
            <View>
              <Text style={styles.container_text}>Date</Text>
            </View>
            <View>
              <Text style={styles.container_text_other}>Feb 28, 2022</Text>
            </View>
          </View>

          <View style={[styles.indivdial_contianer, styles.other_container]}>
            <View>
              <Text style={styles.container_text}>Transcation ID</Text>
            </View>
            <View>
              <Text style={styles.container_text_other}>2092913832472..</Text>
            </View>
          </View>
          <View style={styles.line1}></View>
          <View style={styles.indivdial_contianer}>
            <View>
              <Text style={styles.container_text}>Price</Text>
            </View>
            <View>
              <Text style={styles.container_text_other}>$ 11.99</Text>
            </View>
          </View>
          <View style={[styles.indivdial_contianer, styles.other_container]}>
            <View>
              <Text style={styles.container_text}>Fee</Text>
            </View>
            <View>
              <Text style={styles.container_text_other}>- $ 1.99</Text>
            </View>
          </View>
          <View style={styles.line1}></View>
          <View style={[styles.indivdial_contianer]}>
            <View>
              <Text style={styles.container_text_total}>Total</Text>
            </View>
            <View>
              <Text style={styles.container_text_other_total}>$ 13.98</Text>
            </View>
          </View>
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
  // console.log()
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
      marginTop: width > 400 ? 21 : 15,
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
      color: '#438883',
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
      marginVertical: width > 400 ? 15 : 10,
      marginHorizontal: 30,
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
