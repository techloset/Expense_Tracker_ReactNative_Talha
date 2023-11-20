import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import YoutubeIcon from '../../assets/Images/youtubeIcon.svg';
import Vector from '../../assets/Images/Vector.svg';
import House from '../../assets/Images/house.svg';
import Spotify from '../../assets/Images/spotify.svg';
import {COLOR, FONT_FAMILY} from '../../lib/styles/GlobalStyles';

const SocialComponent = ({navigation}) => {
  const styles = useStyles();
  return (
    <ScrollView style={{height: 314}}>
      <View style={{marginBottom: 100}}>
        <View style={styles.up_Maincontainer}>
          <View style={styles.up_Innercontainer}>
            <View style={styles.imge_container}>
              <YoutubeIcon />
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
      </View>
    </ScrollView>
  );
};

export default SocialComponent;

function useStyles() {
  const {width, height} = useWindowDimensions();
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
      backgroundColor: COLOR.transImageClr,
      width: width > 400 ? 50 : 50,
      height: width > 400 ? 50 : 50,
      // padding: width > 400 ? 10 : 8,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 8,
    },
    upwork_image: {
      width: width > 400 ? 34 : 24,
      height: width > 400 ? 30 : 20,
    },
    UpWorkText: {
      fontSize: width > 400 ? 16 : 14,
      fontFamily: FONT_FAMILY.interMedium,
      fontWeight: '500',
      color: COLOR.black,
    },
    todayText: {
      marginTop: width > 400 ? 6 : 0,
      fontSize: width > 400 ? 13 : 11,
      fontFamily: FONT_FAMILY.interRegular,
      fontWeight: '400',
    },

    girl_Maincontainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 16,
      marginHorizontal: 22,
      alignItems: 'center',
    },
    girl_image: {
      // height: width > 400 ? 30 : 20,
      // justifyContent: 'center',
      // alignItems: 'center',
    },

    paypal_Maincontainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 16,
      marginHorizontal: 22,
      alignItems: 'center',
    },

    youtube_Maincontainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 16,
      marginHorizontal: 22,
      alignItems: 'center',
    },
    paypal_image: {
      // width: 26,
      // height: width > 400 ? 31 : 20,
      // justifyContent: 'center',
      // alignItems: 'center',
    },
    youtube_image: {
      // width: width > 400 ? 35 : 24,
      // height: width > 400 ? 35 : 20,
      // justifyContent: 'center',
      // alignItems: 'center',
    },

    upwork_income: {
      fontSize: width > 400 ? 16 : 14,
      fontFamily: FONT_FAMILY.interMedium,
      fontWeight: '500',
      color: COLOR.green,
    },
    pay_container: {
      backgroundColor: COLOR.lightParrot,
      padding: width > 400 ? 10 : 5,
      width: width > 400 ? 100 : 100,
      alignItems: 'center',
      borderRadius: 40,
    },
  });
}
