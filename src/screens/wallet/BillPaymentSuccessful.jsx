import {StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';
import React from 'react';
import WalletComponentScreen from '../../component/transcationComponent/WalletComponentScreen';
// import { SafeAreaView } from 'react-native-safe-area-context'
// import UpSvg from '../../assets/Images/upSvg.svg';
import UpIcon from '../../assets/Images/upIcon.svg';
import PaymentTick from '../../assets/Images/paymentTick.svg';

import Rectangular from '../../assets/Images/Rectangle.svg';
import Ellipse from '../../assets/Images/Ellipse.svg';
import Notification from '../../assets/Images/notification.svg';
import LessThan from '../../assets/Images/lessThan.png';

const BillPaymentSuccessful = () => {
  return (
    <SafeAreaView>
      <View>
        <View style={styles.container_inner}>
          <Rectangular />
          <Ellipse style={styles.eelispse} />
        </View>
        <View style={styles.images_conatiner}>
          <View style={styles.lessthen}>
            <Image style={{width: 23, height: 23}} source={LessThan} />
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
        <View style={{marginTop: 32}}>
          <View style={styles.indivdial_contianer}>
            <View>
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: 'InterMedium',
                  color: '#000000',
                }}>
                Transaction details
              </Text>
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

        <View style={styles.Next_btn}>
          <Text style={styles.download}>Share receipt</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BillPaymentSuccessful;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: 'white',

    width: '100%',

    marginTop: 156,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  up_container: {
    width: 80,
    height: 80,
    backgroundColor: '#fafafa',
    borderRadius: 40,
    marginTop: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  up: {},
  income_container: {
    marginTop: 10,
  },
  textt: {
    color: '#438883',
    fontFamily: 'InterSemiBold',
    fontSize: 22,
  },
  value: {
    color: '#666666',
    fontFamily: 'InterMedium',
    fontSize: 16,
  },
  indivdial_contianer: {
    flexDirection: 'row',
    marginHorizontal: 30,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  container_text: {
    color: '#666666',
    fontSize: 16,
    fontFamily: 'InterMedium',
  },
  from_container: {
    marginTop: 21,
  },
  other_container: {
    marginTop: 12,
  },
  container_text_other: {
    color: '#000000',
    fontFamily: 'InterMedium',
    fontSize: 16,
  },
  container_text_other_income: {
    color: '#438883',
    fontFamily: 'InterSemiBold',
    fontSize: 16,
  },
  container_text_total: {
    fontFamily: 'InterSemiBold',
    fontSize: 16,
    color: '#666666',
  },
  container_text_other_total: {
    fontFamily: 'InterSemiBold',
    fontSize: 16,
    color: '#000000',
    fontWeight: '600',
  },
  line1: {
    borderTopWidth: 1,
    borderTopColor: '#DDDDDD',
    marginVertical: 15,
    marginHorizontal: 30,
  },
  Next_btn: {
    width: 350,
    borderWidth: 1,
    borderColor: '#438883',
    borderRadius: 40,
    paddingHorizontal: 10,
    paddingVertical: 20,

    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 32,
    marginTop: 20,
    marginBottom: 20,
  },
  download: {
    color: '#438883',
    fontFamily: 'InterSemiBold',
    fontSize: 18,
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
