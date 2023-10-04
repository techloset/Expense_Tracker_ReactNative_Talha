import {StyleSheet, Text, View, Image,TouchableOpacity} from 'react-native';
import React from 'react';
import WalletComponentScreen from '../../component/transcationComponent/WalletComponentScreen';
import youtubeCardBills from '../../assets/Images/youtubeCardBills.png';
import CreditCard from '../../assets/Images/creditcard.svg';
import Dot from '../../assets/Images/dot.svg';
import PaypalIcon from '../../assets/Images/paypalogo.svg';
import EmptyDot from '../../assets/Images/emptyDot.svg';
// import Butoon from '../../component/button/Butoon';

import Rectangular from '../../assets/Images/Rectangle.svg';
import Ellipse from '../../assets/Images/Ellipse.svg';
import Notification from '../../assets/Images/notification.svg';
import LessThan from '../../assets/Images/lessThan.png';

const BillPayment = ({navigation}) => {
  return (
    <View style={{width: 414, height: 896}}>
      
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
      
      
      {/* <WalletComponentScreen /> */}

      <View style={styles.container}>
        <View style={styles.youtube_Container}>
          <View style={styles.imge_container}>
            <Image style={styles.youtube_image} source={youtubeCardBills} />
          </View>

          <View>
            <Text style={styles.youtubeText}>You will pay <Text style={{color:"#438883"}}>Youtube Premium</Text> for one month with BCA OneKlik</Text>
          </View>
        </View>

        <View style={styles.priceFeeConatiner}>
          <View style={styles.below_conatent}>
            <Text style={[styles.priceFeeText, styles.priceText]}>Price</Text>
            <Text style={styles.priceFeeValue}>$ 11.99</Text>
          </View>

          <View style={styles.below_conatent}>
            <Text style={styles.priceFeeText}>Fee</Text>
            <Text style={styles.priceFeeValue}>$ 1.99</Text>
          </View>
          <View style={styles.line1}></View>
          <View style={styles.below_conatent}>
            <Text style={styles.TotalText}>Total</Text>
            <Text style={styles.Totalvalue}>$ 13.98</Text>
          </View>
        </View>

        

        

       

        <TouchableOpacity onPress={() => navigation.navigate('BillPaymentSuccessful')}>
        <View style={styles.bttn}>
          <Text style={styles.bttnText}>Confirm and Pay Now</Text>
        </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BillPayment;

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

  youtube_image: {
    // width: 40,
    // height: 40,
  },
  imge_container: {
    backgroundColor: '#fafafa',
    // backgroundColor: 'green',
    width: 80,
    height: 80,
    // padding: 10,
    // borderRadius: '0%',
    alignItems: 'center',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  youtube_Container: {
    // flexDirection: 'row',
    // backgroundColor: 'red',
    alignItems: 'center',
    marginTop: 30,
    marginLeft: 30,
  },
  youtubeText: {
    // backgroundColor:'red',
    fontSize: 20,
    fontFamily: 'InterRegular',
    color: '#000000',
    marginHorizontal:58,
    // width:300
    textAlign:'center',
    width:315,
  },
  youtubeText_below: {
    fontSize: 14,
    fontFamily: 'InterRegular',
    color: '#666666',
    // marginTop:8
  },
  below_conatent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  line1: {
    borderTopWidth: 1,
    borderTopColor: '#DDDDDD',
    marginVertical: 20,
    // marginHorizontal: 30,
  },
  priceFeeConatiner: {
    // backgroundColor:'brown',
    marginTop: 43,
    marginHorizontal: 30,
  },
  priceFeeText: {
    color: '#666666',
    fontSize: 16,
    fontFamily: 'InterMedium',
  },
  TotalText: {
    color: '#666666',
    fontSize: 16,
    fontFamily: 'InterSemiBold',
  },
  priceFeeValue: {
    color: '#000000',
    fontSize: 16,
    fontFamily: 'InterMedium',
  },
  Totalvalue: {
    color: '#000000',
    fontSize: 16,
    fontFamily: 'InterSemiBold',
  },
  priceText: {
    marginBottom: 12,
  },
  card_container: {
    // height: 100,
    // width: 344,
    backgroundColor: '#4388831a',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 20,
    // marginBottom:15,
    marginHorizontal: 35,
  },
  circle_bank: {
    marginTop: 15,
    marginBottom: 15,
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
    fontSize: 16,
    color: '#438883',
    fontFamily: 'InterSemiBold',
  },
  othertext_contents: {
    color: '#438883',
    fontSize: 12,
    fontFamily: 'InterMedium',
    marginRight: 50,
    marginTop: 4,
  },
  circletck: {
    marginRight: 20,
  },
  card_container_paypal: {
    // height: 100,
    // width: 344,
    backgroundColor: '#FAFAFA',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 20,
    // marginBottom:15,
    marginHorizontal: 35,
  },
  selectMethod:{
    marginTop:42,
    marginBottom:20,
    marginLeft:30
  },
  selectMethodText:{
   color:'#000000',
   fontSize:18,
   fontFamily:'InterMedium'
  },
  bttn:{
    while:358,
    height:60,
    backgroundColor:'#69AEA9',
    borderRadius:40,
    paddingHorizontal:20,
    paddingVertical:10,
    justifyContent:'center',
  alignItems:'center',
  marginHorizontal:28,
  marginTop:30,
  marginBottom:20
  },
  bttnText:{
   color:'#ffffff',
   fontSize:18,
   fontFamily:'InterSemiBold',
  
  },



  
  eelispse: {
    position: 'absolute',
   
  },
  images_conatiner: {
    flex:1,
    position:'absolute',
    width:'100%',
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems:'center',
    marginTop:78,
  },

  notification: {
    width: 40,
    height: 40,
    borderRadius: 6.67,
    padding: 8.33,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight:24,
  },
  lessthen:{
    marginLeft:24,
  },
});
