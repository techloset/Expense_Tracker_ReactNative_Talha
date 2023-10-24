import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import React from 'react';
import VisaCard from '../../assets/Images/visaCard.svg';
import DebitCard from '../../assets/Images/DebitCard.svg';
import Rectangular from '../../assets/Images/Rectangle.svg';
import Ellipse from '../../assets/Images/Ellipse.svg';
import Notification from '../../assets/Images/notification.svg';
import LessThan from '../../assets/Images/left.svg';

const CardWalletScreen = ({navigation}) => {
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

const styles = StyleSheet.create({
  container: {
    // flex:1,
    position: 'absolute',
    backgroundColor: 'white',
    width: '100%',
    // height:'290%',
    marginTop: 165,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  butn_type_container: {
    flexDirection: 'row',
    backgroundColor: '#f4f6f6',
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
    backgroundColor: '#ffffff',
    borderRadius: 40,
  },
  upcoming_bill_btn: {
    backgroundColor: 'transparent',
    borderRadius: 40,
  },
  textt: {
    fontFamily: 'InterSemiBold',
    color: '#666666',
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
    color: '#ffffff',
    fontSize: 18,
    fontFamily: 'InterSemiBold',
  },

  containertText: {
    marginLeft: 25,
  },

  textx1: {
    color: '#000000',
    fontSize: 16,
    fontFamily: 'InterMedium',
    marginTop: 28,
  },
  textx2: {
    color: '#666666',
    fontSize: 13,
    fontFamily: 'InterRegular',
    width: '80%',
  },
  input2: {
    height: 40,

    borderWidth: 1,
    padding: 10,
    color: '#dddddd',
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
    color: '#888888',
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
