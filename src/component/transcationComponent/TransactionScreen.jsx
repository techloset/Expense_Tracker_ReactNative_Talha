import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Frame21 from '../../assets/Images/Frame21.svg';
import Frame22 from '../../assets/Images/Frame22.svg';
import Frame23 from '../../assets/Images/Frame23.svg';
import SocialComponent from './SocialComponent';

const TransactionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.Heading_Container}>
        <Text style={styles.Heading}>Total Balance</Text>
        <Text style={styles.valuee}>$ 2,548.00</Text>
      </View>
      <View style={styles.frame_container}>
        <View style={styles.fram}>
          <Frame21 />
          <Text style={styles.fram_text}>Add</Text>
        </View>
        <View style={styles.fram}>
          <Frame22 style={{marginHorizontal: 30}} />
          <Text style={styles.fram_text}>Pay</Text>
        </View>
        <View style={styles.fram}>
          <Frame23 />
          <Text style={styles.fram_text}>Send</Text>
        </View>
      </View>
      <View style={styles.butn_type_container}>
        <View style={[styles.both_btn, styles.transition_btn]}>
          <Text style={styles.textt}>Transactions</Text>
        </View>
        <View style={[styles.both_btn, styles.upcoming_bill_btn]}>
          <Text style={styles.textt}>Upcoming Bills</Text>
        </View>
      </View>
      <SocialComponent />
    </View>
  );
};

export default TransactionScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
  },

  Heading_Container: {
    // flex:4,
    marginTop: 50,
    // backgroundColor: 'blue',
    // flexDirection:'row',
    // justifyContent:'center',
    alignItems: 'center',
    // marginHorizontal:'auto'
  },
  Heading: {
    fontSize: 16,
    fontFamily: 'InterRegular',
    color: '#666666',
  },
  valuee: {
    fontFamily: 'InterBold',
    fontSize: 30,
    color: '#222222',
    marginTop: 12,
  },
  frame_container: {
    // flex:1,
    // backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 40,
  },
  fram: {
    // justifyContent:'center',
    alignItems: 'center',
  },
  fram_text: {
    marginTop: 10,
    color: '#222222',
    fontFamily: 'InterRegular',
    fontSize: 16,
  },
  butn_type_container: {
    flexDirection: 'row',
    backgroundColor: '#f4f6f6',
    // backgroundColor:"brown",
    marginTop: 60,
    marginHorizontal: 20,
    color: '#f4f6f6',
    borderRadius: 40,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25,
  },
  both_btn: {
    backgroundColor: '#ffffff',
    height: 40,
    width: 180,

    justifyContent: 'center',
    alignItems: 'center',
  },
  transition_btn: {
    backgroundColor: 'red',
    borderRadius: 40,
  },
  upcoming_bill_btn: {
    backgroundColor: 'red',
    borderRadius: 40,
  },
  textt: {
    fontFamily: 'InterSemiBold',
    color: '#666666',
    fontSize: 14,
    fontWeight: '600',
  },
});
