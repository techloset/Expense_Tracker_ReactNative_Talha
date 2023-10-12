import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  useWindowDimensions,
  Dimensions,
} from 'react-native';
import React from 'react';
import YoutubeIcon from '../../assets/Images/youtubeIcon.png';
import Vector from '../../assets/Images/Vector.svg';
import House from '../../assets/Images/house.svg';
import Spotify from '../../assets/Images/spotify.svg';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const SocialComponent = ({navigation}) => {
  const styles = useStyles();
  return (
    <View style={{marginBottom:100}}>
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
          <TouchableOpacity
            onPress={() => navigation.navigate('CardWalletScreen')}>
            <View style={styles.pay_container}>
              <Text style={styles.upwork_income}>Pay</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.girl_Maincontainer}>
          <View style={styles.up_Innercontainer}>
            <View style={styles.imge_container}>
              <View style={styles.girl_image}>
                <Vector style={{}} />
              </View>
            </View>
            <View>
              <Text style={styles.UpWorkText}>Transfer</Text>
              <Text style={styles.todayText}>Yesterday</Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('CardWalletScreen')}>
            <View style={styles.pay_container}>
              <Text style={styles.upwork_income}>Pay</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.paypal_Maincontainer}>
          <View style={styles.up_Innercontainer}>
            <View style={styles.imge_container}>
              <View style={styles.paypal_image}>
                <House />
              </View>
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
              <View style={styles.youtube_image}>
                <Spotify />
              </View>
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

function useStyles() {
  const {width, height} = useWindowDimensions();
  // console.log()
  return StyleSheet.create({
    up_Maincontainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 22,
      alignItems: 'center',
    },
    up_Innercontainer: {
      flexDirection: 'row',
      gap: 10,
    },
    imge_container: {
      backgroundColor: '#f0f6f5',
      width: width > 400 ? 50 : 35,
      height: width > 400 ? 50 : 35,
      padding: width > 400 ? 10 : 8,
      alignItems: 'center',
      borderRadius: 8,
    },
    upwork_image: {
      width: width > 400 ? 34 : 24,
      height: width > 400 ? 30 : 20,
    },
    UpWorkText: {
      fontSize: width > 400 ? 16 : 12,
      fontFamily: 'InterMedium',
      fontWeight: '500',
      color: '#000000',
    },
    todayText: {
      marginTop: width > 400 ? 6 : 0,
      fontSize: width > 400 ? 13 : 10,
      fontFamily: 'InterRegular',
    },

    girl_Maincontainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 16,
      marginHorizontal: 22,
      alignItems: 'center',
    },
    girl_image: {
      height: width > 400 ? 30 : 20,
      justifyContent: 'center',
      alignItems: 'center',
    },

    paypal_Maincontainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 16,
      marginHorizontal: 22,
      alignItems: 'center',
    },

    paypal_image: {
      width: 26,
      height: width > 400 ? 31 : 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    youtube_Maincontainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 16,
      marginHorizontal: 22,
      alignItems: 'center',
      // backgroundColor:'red',
      // marginBottom:110
    },
    youtube_image: {
      width: width > 400 ? 35 : 24,
      height: width > 400 ? 35 : 20,
      justifyContent: 'center',
      alignItems: 'center',
    },

    upwork_income: {
      fontSize: width > 400 ? 18 : 14,
      fontFamily: 'InterMedium',
      fontWeight: '500',
      color: '#438883',
    },
    pay_container: {
      backgroundColor: '#ecf8f7',
      padding: width > 400 ? 10: 5,
      width: width>400 ? 100 :100 ,
      alignItems: 'center',
      borderRadius: 40,
    },
  });
}
