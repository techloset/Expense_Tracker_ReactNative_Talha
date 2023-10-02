import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import React from 'react';
// import UpWork from '../../assets/Images/upIcon.png';
// import girlsImage from '../../assets/Images/image7.png';
// import PaypalIcon from '../../assets/Images/paypalIcon.png';
import YoutubeIcon from '../../assets/Images/youtubeIcon.png';
import Vector from '../../assets/Images/Vector.svg'
import House from '../../assets/Images/house.svg'
import Spotify from '../../assets/Images/spotify.svg'

const SocialComponent = () => {
  return (
    <View>
     
        <ScrollView style={{height: 264}}>
          <View style={styles.up_Maincontainer}>
            <View style={styles.up_Innercontainer}>
              <View style={styles.imge_container}>
                <Image style={styles.upwork_image} source={YoutubeIcon} />
              </View>
              <View>
                <Text style={styles.UpWorkText}>Upwork</Text>
                <Text style={styles.todayText}>Today</Text>
              </View>
            </View>
            <View style={styles.pay_container}>
              <Text style={styles.upwork_income}>Pay</Text>
            </View>
          </View>

          <View style={styles.girl_Maincontainer}>
            <View style={styles.up_Innercontainer}>
              <View style={styles.imge_container}>
                <Vector style={styles.girl_image}  />
              </View>
              <View>
                <Text style={styles.UpWorkText}>Transfer</Text>
                <Text style={styles.todayText}>Yesterday</Text>
              </View>
            </View>
            <View style={styles.pay_container}>
              <Text style={styles.upwork_income}>Pay</Text>
            </View>
          </View>

          <View style={styles.paypal_Maincontainer}>
            <View style={styles.up_Innercontainer}>
              <View style={styles.imge_container}>
                <House style={styles.paypal_image}  />
              </View>
              <View>
                <Text style={styles.UpWorkText}>paypal</Text>
                <Text style={styles.todayText}>Jan 30, 2022</Text>
              </View>
            </View>
            <View style={styles.pay_container}>
              <Text style={styles.upwork_income}>Pay</Text>
            </View>
          </View>

          <View style={styles.youtube_Maincontainer}>
            <View style={styles.up_Innercontainer}>
              <View style={styles.imge_container}>
                <Spotify style={styles.youtube_image} />
              </View>
              <View>
                <Text style={styles.UpWorkText}>Youtube</Text>
                <Text style={styles.todayText}>Jan 16, 2022</Text>
              </View>
            </View>
            <View style={styles.pay_container}>
              <Text style={styles.upwork_income}>Pay</Text>
            </View>
          </View>
         
         
        </ScrollView>
      
    </View>
  );
};

export default SocialComponent;

const styles = StyleSheet.create({
  youtube_Maincontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor:'yellow',
    marginTop: 16,
    marginHorizontal: 22,
    alignItems: 'center',
    // marginBottom:16,
  },
  paypal_Maincontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor:'yellow',
    marginTop: 16,
    marginHorizontal: 22,
    alignItems: 'center',
  },
  girl_Maincontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor:'yellow',
    marginTop: 16,
    marginHorizontal: 22,
    alignItems: 'center',
  },
  up_Maincontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor:'yellow',
    // marginTop: 19,
    marginHorizontal: 22,
    alignItems: 'center',
  },
  up_Innercontainer: {
    flexDirection: 'row',
    gap: 10,
  },
  imge_container: {
    backgroundColor: '#f0f6f5',
    width: 50,
    height: 50,
    padding: 10,
    alignItems: 'center',
    borderRadius: 8,
  },
  upwork_image: {
    width: 34,
    height: 30,
  },
  girl_image: {
    width: 30,
    height: 30,
    borderRadius: 50,
  },
  paypal_image: {
    width: 26,
    height: 31,
  },
  youtube_image: {
    width: 35,
    height: 35,
  },
  UpWorkText: {
    fontSize: 16,
    fontFamily: 'InterMedium',
    fontWeight: '500',
    color: '#000000',
  },
  todayText: {
    marginTop: 6,
    fontSize: 13,
    fontFamily: 'InterRegular',
    fontWeight: '400',
  },
  upwork_income: {
    fontSize: 16,
    fontFamily: 'InterMedium',
    fontWeight: '500',
    color: '#438883',
  },
  pay_container:{
    backgroundColor:'#ecf8f7',
    padding:10,
    width:100,
    // justifyContent:'center',
    alignItems:'center',
    borderRadius:40,

  }
});
