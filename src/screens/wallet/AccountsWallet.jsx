import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import WalletComponentScreen from '../../component/transcationComponent/WalletComponentScreen';
// import VisaCard from '../../assets/Images/visaCard.svg';
// import DebitCard from '../../assets/Images/DebitCard.svg';
import Dollar from '../../assets/Images/dollar.svg';
import Bank from '../../assets/Images/bank-fill.svg';
import PaypaLogo from '../../assets/Images/paypalogo.svg';
import CheckCircle from '../../assets/Images/CheckCircle.svg';

const CardWalletScreen = () => {
  return (
    <View>
      {/* <Text>CardWalletScreen</Text> */}

      <WalletComponentScreen />
      <View style={styles.container}>
        {/* <UpcommingBills/> */}
        <View style={styles.butn_type_container}>
          <TouchableOpacity>
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

        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <View style={styles.card_container}>
            <View style={styles.circle_bank}>
              <Bank />
            </View>
            <View>
              <Text style={styles.bankLink}>Bank Link</Text>
              <View style={styles.othertext_content}>
                <Text style={styles.othertext_contents}>
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
          
          <View style={styles.card_container}>
            <View style={styles.circle_bank}>
              <Dollar />
            </View>
            <View>
              <Text style={styles.bankLink}> Microdeposits</Text>
              <View style={styles.othertext_content}>
                <Text style={styles.othertext_contents}>
                Connect bank in 5-7 days{' '}
                </Text>
                
              </View>
            </View>
            <View style={styles.circletck}>
              <CheckCircle />
            </View>
          </View>

          <View style={styles.card_container}>
            <View style={styles.circle_bank}>
              <PaypaLogo />
            </View>
            <View>
              <Text style={styles.bankLink}>Paypal</Text>
              <View style={styles.othertext_content}>
                <Text style={styles.othertext_contents}>
                Connect you paypal account{' '}
                </Text>
                
              </View>
            </View>
            <View style={styles.circletck}>
              <CheckCircle />
            </View>
          </View>

         <View style={styles.Next_btn}>

         </View>
        </View>
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
    fontSize: 14,
    fontWeight: '600',
  },
  card_container: {
    height: 100,
    width: 344,
    backgroundColor: '#4388831a',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    marginBottom:15,
  },
  circle_bank: {
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 15,
    width: 60,
    height: 60,
    backgroundColor: '#ffffff',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bankLink: {
    fontSize: 18,
    color: '#438883',
    fontFamily: 'InterSemiBold',
  },
  othertext_contents: {
    color: '#438883',
    fontSize: 12,
    fontFamily: 'InterMedium',
    marginRight: 50,
    marginTop:4
  },
  circletck: {
    marginRight: 20,
    
  },
  Next_btn:{
    
        height:100,
        width:350,
        borderWidth: 1,
        borderColor: '#438883',
        borderRadius:40,
    
  }
});
