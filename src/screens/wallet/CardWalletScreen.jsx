import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import VisaCard from '../../assets/Images/visaCard.svg';
import DebitCard from '../../assets/Images/DebitCard.svg';
import Rectangular from '../../assets/Images/Rectangle.svg';
import Ellipse from '../../assets/Images/Ellipse.svg';
import Notification from '../../assets/Images/notification.svg';
import LessThan from '../../assets/Images/left.svg';
import {COLOR, FONT_FAMILY} from '../../lib/styles/GlobalStyles';

const CardWalletScreen = ({navigation}) => {
  const styles = useStyles();
  return (
    <KeyboardAvoidingView>
      <View>
        <View>
          <View style={styles.container_inner}>
            <Rectangular />
            <Ellipse style={styles.eelispse} />
          </View>
          <View style={styles.images_conatiner}>
            <TouchableOpacity
              onPress={() => navigation.push('WalletScreen_upcomingBills')}>
              <View style={styles.lessthen}>
                <LessThan />
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
            <TouchableOpacity>
              <View style={[styles.both_btn, styles.transition_btn]}>
                <Text style={styles.textt}>Cards</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('AccountsWallet')}>
              <View style={[styles.both_btn, styles.upcoming_bill_btn]}>
                <Text style={styles.textt}>Accounts</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.Cards}>
            <View style={styles.visaCard}>
              <VisaCard />
            </View>

            <View style={styles.DebitCard}>
              <DebitCard />
            </View>
          </View>

          <View style={styles.containertText}>
            <Text style={styles.textx1}>Add your debit Card</Text>
            <Text style={styles.textx2}>
              This card must be connected to a bank account under your name{' '}
            </Text>
          </View>

          <View>
            <View style={styles.inpputcontainer}>
              <TextInput
                style={[styles.input2, styles.input20]}
                placeholder="DEBIT CARD NUMBER"
                keyboardType="numeric"
              />
            </View>
            <View style={styles.inputContiner1}>
              <View>
                <TextInput
                  style={[styles.input2, styles.input22]}
                  placeholder="DEBIT CARD NUMBER"
                  keyboardType="numeric"
                />
              </View>
              <View>
                <TextInput
                  style={[styles.input2, styles.input32]}
                  placeholder="CVC"
                  keyboardType="numeric"
                />
              </View>
            </View>
            <View style={styles.inputContiner1}>
              <View>
                <TextInput
                  style={[styles.input2, styles.input22]}
                  placeholder="EXPIRATION MM/YY"
                  keyboardType="numeric"
                />
              </View>
              <View>
                <TextInput
                  style={[styles.input2, styles.input32]}
                  placeholder="ZIP"
                  keyboardType="numeric"
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default CardWalletScreen;

function useStyles() {
  const {width} = useWindowDimensions();
  return StyleSheet.create({
    container: {
      position: 'absolute',
      backgroundColor: COLOR.white,
      width: '100%',
      marginTop: 165,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
    },
    butn_type_container: {
      flexDirection: 'row',
      backgroundColor: COLOR.light,
      marginTop: 60,
      marginHorizontal: 20,
      color: COLOR.light,
      borderRadius: 40,
      height: 48,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 25,
    },
    both_btn: {
      backgroundColor: COLOR.white,
      height: 40,
      width: 180,
      height: width > 400 ? 40 : 35,
      width: width > 400 ? 180 : 150,
      justifyContent: 'center',
      alignItems: 'center',
    },
    transition_btn: {
      backgroundColor: COLOR.white,
      borderRadius: 40,
    },
    upcoming_bill_btn: {
      backgroundColor: COLOR.transparent,
      borderRadius: 40,
    },
    textt: {
      fontFamily: FONT_FAMILY.interSemiBold,
      color: COLOR.SecondaryGrey,
      fontSize: 14,
      fontWeight: '600',
    },
    Cards: {
      alignItems: 'center',
      height: 225,
    },
    DebitCard: {
      position: 'absolute',
      marginTop: 16,
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
      fontSize: 18,
      fontFamily: FONT_FAMILY.interSemiBold,
      fontWeight: '600',
    },

    containertText: {
      marginLeft: 25,
    },

    textx1: {
      color: COLOR.black,
      fontSize: 16,
      fontFamily: FONT_FAMILY.interMedium,
      marginTop: 28,
      fontWeight: '500',
    },
    textx2: {
      color: COLOR.SecondaryGrey,
      fontSize: 13,
      fontFamily: FONT_FAMILY.interRegular,
      width: '80%',
      fontWeight: '400',
    },
    input2: {
      height: 40,
      borderWidth: 1,
      padding: 10,
      color: COLOR.borderColor,
      borderRadius: 8,
      height: 54,
      gap: 11,
    },
    input22: {
      width: 220,
    },
    input32: {
      width: 133,
    },
    placeholder: {
      color: COLOR.gray,
      fontSize: 12,
    },
    inputContiner1: {
      flexDirection: 'row',
      marginHorizontal: 25,
      marginTop: 12,
      gap: 11,
    },
    inpputcontainer: {
      marginHorizontal: 25,
      marginTop: 30,
    },
  });
}
