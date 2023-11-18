import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import Frame21 from '../../assets/Images/Frame21.svg';
import Frame22 from '../../assets/Images/Frame22.svg';
import Frame23 from '../../assets/Images/Frame23.svg';
import SocialComponentTwo from './SocialComponenttwo';
import {COLOR, FONT_FAMILY} from '../../lib/styles/GlobalStyles';

const TransactionScreen = ({navigation}) => {
  const styles = useStyles();

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
        <TouchableOpacity onPress={() => navigation.navigate('WalletScreen')}>
          <View style={[styles.both_btn, styles.transition_btn]}>
            <Text style={styles.textt}>Transactions</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={[styles.both_btn, styles.upcoming_bill_btn]}>
            <Text style={styles.textt}>Upcoming Bills</Text>
          </View>
        </TouchableOpacity>
      </View>
      <SocialComponentTwo navigation={navigation} />
    </View>
  );
};

export default TransactionScreen;

function useStyles() {
  const {width} = useWindowDimensions();
  return StyleSheet.create({
    container: {
      justifyContent: 'center',
      flex: 1,
    },
    Heading_Container: {
      marginTop: width > 400 ? 50 : 20,
      alignItems: 'center',
    },
    Heading: {
      fontSize: width > 400 ? 16 : 16,
      fontFamily: FONT_FAMILY.interRegular,
      color: COLOR.SecondaryGrey,
      fontWeight: '400',
    },
    valuee: {
      fontFamily: FONT_FAMILY.interBold,
      fontSize: width > 400 ? 30 : 20,
      color: COLOR.black,
      marginTop: width > 400 ? 12 : 12,
      fontWeight: '700',
    },
    frame_container: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: width > 400 ? 40 : 40,
    },
    fram: {
      alignItems: 'center',
    },
    fram_text: {
      marginTop: width > 400 ? 10 : 10,
      color: COLOR.black,
      fontFamily: FONT_FAMILY.interRegular,
      fontSize: width > 400 ? 16 : 12,
    },
    butn_type_container: {
      flexDirection: 'row',
      backgroundColor: COLOR.light,
      marginTop: width > 400 ? 60 : 40,
      marginHorizontal: 20,
      color: COLOR.light,
      borderRadius: 40,
      height: width > 400 ? 48 : 42,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 25,
    },
    both_btn: {
      backgroundColor: COLOR.white,
      height: width > 400 ? 40 : 30,
      width: width > 400 ? 180 : 150,
      justifyContent: 'center',
      alignItems: 'center',
    },
    transition_btn: {
      backgroundColor: COLOR.transparent,
      borderRadius: 40,
    },
    upcoming_bill_btn: {
      backgroundColor: COLOR.white,
      borderRadius: 40,
    },
    textt: {
      fontFamily: FONT_FAMILY.interSemiBold,
      color: COLOR.SecondaryGrey,
      fontSize: width > 400 ? 14 : 12,
      fontWeight: '600',
    },
  });
}
