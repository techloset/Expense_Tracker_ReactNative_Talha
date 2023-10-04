import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import WalletComponentScreen from '../../component/transcationComponent/WalletComponentScreen';
import VisaCard from '../../assets/Images/visaCard.svg';
import DebitCard from '../../assets/Images/DebitCard.svg';

import Rectangular from '../../assets/Images/Rectangle.svg';
import Ellipse from '../../assets/Images/Ellipse.svg';
import Notification from '../../assets/Images/notification.svg';
import LessThan from '../../assets/Images/lessThan.png';
const CardWalletScreen = ({navigation}) => {
  return (
    <View>
      {/* <Text>CardWalletScreen</Text> */}

      <View>
        <View style={styles.container_inner}>
          <Rectangular />
          <Ellipse style={styles.eelispse} />
        </View>
        <View style={styles.images_conatiner}>
        <TouchableOpacity onPress={() => navigation.push('WalletScreen_upcomingBills')}>
          <View style={styles.lessthen}>
            <Image style={{width: 23, height: 23}} source={LessThan} />
          </View>
          </TouchableOpacity>
          <View style={styles.notification}>
            <Notification />
          </View>
        </View>
      </View>
      {/* <WalletComponentScreen /> */}
      <View style={styles.container}>
        {/* <UpcommingBills/> */}
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
        <Text>Add your debit Card</Text>
        <Text>
          This card must be connected to a bank account under your name{' '}
        </Text>
      </View>
    </View>
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
    // alignContent:'center',
    alignItems: 'center',
    backgroundColor: 'red',
    position: 'relative',
    height: '64%',
  },
  DebitCard: {
    position: 'absolute',
    marginTop: 16,
    // backgroundColor:""
  },
  visaCard: {
    // position:'absolute',
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
