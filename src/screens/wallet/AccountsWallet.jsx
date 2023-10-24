import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import React from 'react';

import Dollar from '../../assets/Images/dollar.svg';
import Bank from '../../assets/Images/bank-fill.svg';
import PaypaLogo from '../../assets/Images/paypalogo.svg';
import CheckCircle from '../../assets/Images/CheckCircle.svg';
import Rectangular from '../../assets/Images/Rectangle.svg';
import Ellipse from '../../assets/Images/Ellipse.svg';
import Notification from '../../assets/Images/notification.svg';
import LessThan from '../../assets/Images/left.svg';

const AccountsWallet = ({navigation}) => {
  const styles = useStyles();
  return (
    <View style={{height: '100%', backgroundColor: 'white'}}>
      <View>
        <View style={styles.container_inner}>
          <Rectangular />
          <Ellipse style={styles.eelispse} />
        </View>
        <View style={styles.images_conatiner}>
          <TouchableOpacity
            onPress={() => navigation.push('WalletScreen_upcomingBills')}>
            <View style={styles.lessthen}>
              <LessThan/>
            </View>
          </TouchableOpacity>
          <View>
            <Text style={styles.billText}>Connect Wallet</Text>
          </View>
          <View style={styles.notification}>
            <Notification />
          </View>
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.butn_type_container}>
          <TouchableOpacity
            onPress={() => navigation.navigate('CardWalletScreen')}>
            <View style={[styles.both_btn, styles.transition_btn]}>
              <Text style={styles.textt}>Cards</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={[styles.both_btn, styles.upcoming_bill_btn]}>
              <Text style={styles.textt}>Accounts</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.mainCard_Container}>
          <View style={[styles.card_container, styles.HomeConataienrColor]}>
            <View style={styles.circle_bank}>
              <Bank />
            </View>
            <View>
              <Text style={[styles.bankLink, styles.HomeConataienrColortext]}>
                Bank Link
              </Text>
              <View style={styles.othertext_content}>
                <Text
                  style={[
                    styles.othertext_contents,
                    styles.HomeConataienrColortext,
                  ]}>
                  Connect your bank{' '}
                </Text>
                <Text style={styles.othertext_contents}>
                  account to deposit & fund{' '}
                </Text>
              </View>
            </View>
            <View style={styles.circletck}>
              <CheckCircle />
            </View>
          </View>

          <View style={[styles.card_container, styles.otherTwoColorCard]}>
            <View style={styles.circle_bank}>
              <Dollar />
            </View>
            <View>
              <Text style={[styles.bankLink, styles.otherTwoColorCardText]}>
                {' '}
                Microdeposits
              </Text>
              <View style={styles.othertext_content}>
                <Text
                  style={[
                    styles.othertext_contents,
                    styles.otherTwoColorCardText,
                  ]}>
                  Connect bank in 5-7 days{' '}
                </Text>
              </View>
            </View>
            <View style={styles.circletck}>
              <CheckCircle />
            </View>
          </View>

          <View style={[styles.card_container, styles.otherTwoColorCard]}>
            <View style={styles.circle_bank}>
              <PaypaLogo />
            </View>
            <View>
              <Text style={[styles.bankLink, styles.otherTwoColorCard]}>
                Paypal
              </Text>
              <View style={styles.othertext_content}>
                <Text
                  style={[styles.othertext_contents, styles.otherTwoColorCard]}>
                  Connect you paypal account{' '}
                </Text>
              </View>
            </View>
            <View style={styles.circletck}>
              <CheckCircle />
            </View>
          </View>

          <TouchableOpacity onPress={() => navigation.navigate('IncomeScreen')}>
            <View style={styles.Next_btn}>
              <Text style={styles.download}>Next</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AccountsWallet;

function useStyles() {
  const {width, height} = useWindowDimensions();
  return StyleSheet.create({
    container: {
      position: 'absolute',
      backgroundColor: 'white',
      width: '100%',
      marginTop: 165,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
    },
    butn_type_container: {
      flexDirection: 'row',
      backgroundColor: '#f4f6f6',

      marginTop: width > 400 ? 60 : 40,
      marginHorizontal: 20,
      color: '#f4f6f6',
      borderRadius: 40,
      height: width > 400 ? 48 : 40,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 25,
    },
    both_btn: {
      backgroundColor: '#ffffff',
      height: width > 400 ? 48 : 34,

      width: width > 400 ? 180 : 150,

      justifyContent: 'center',
      alignItems: 'center',
    },
    transition_btn: {
      backgroundColor: 'transparent',
      borderRadius: 40,
    },
    upcoming_bill_btn: {
      backgroundColor: '#ffffff',
      borderRadius: 40,
    },
    textt: {
      fontFamily: 'InterSemiBold',
      color: '#666666',
      fontSize: width > 400 ? 14 : 11,
      fontWeight: '600',
    },
    HomeConataienrColor: {
      backgroundColor: '#4388831a',
      color: '#438883',
    },
    HomeConataienrColortext: {
      color: '#438883',
    },
    card_container: {
      width: width > 400 ? 344 : 320,

      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 30,
      marginBottom: 15,
    },
    otherTwoColorCard: {
      backgroundColor: '#FAFAFA',
      color: '#888888',
    },
    otherTwoColorCardText: {
      color: '#888888',
    },
    mainCard_Container: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    circle_bank: {
      marginTop: 20,
      marginBottom: 20,
      marginLeft: 20,
      marginRight: 15,
      width: width > 400 ? 60 : 50,
      height: width > 400 ? 60 : 50,
      backgroundColor: '#ffffff',
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center',
    },
    bankLink: {
      fontSize: width > 400 ? 18 : 12,

      fontFamily: 'InterSemiBold',

      width: '70%',
    },
    othertext_contents: {
      fontSize: width > 400 ? 12 : 10,
      fontFamily: 'InterMedium',
      marginRight: 50,
      marginTop: 4,
    },
    circletck: {
      marginRight: 20,
    },
    Next_btn: {
      width: width > 400 ? 350 : 250,
      borderWidth: 1,
      borderColor: '#438883',
      borderRadius: 40,
      paddingHorizontal: width > 400 ? 10 : 5,
      paddingVertical: width > 400 ? 20 : 5,

      justifyContent: 'center',
      alignItems: 'center',
      marginTop: width > 400 ? 103 : 18,
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

    billText: {
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
