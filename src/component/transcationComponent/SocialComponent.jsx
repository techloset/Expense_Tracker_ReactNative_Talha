import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import Upicons from '../../assets/Images/Upicons.svg';
import girlsImage from '../../assets/Images/image7.png';
import Paypals from '../../assets/Images/Paypals.svg';
import YoutubeIcon from '../../assets/Images/youtubeIcon.svg';
import {COLOR, FONT_FAMILY} from '../../lib/styles/GlobalStyles';

const SocialComponent = () => {
  const styles = useStyles();
  return (
    <View>
      <ScrollView style={{height: 284}}>
        <View style={styles.up_Maincontainer}>
          <View style={styles.up_Innercontainer}>
            <View style={styles.imge_container}>
              <Upicons />
            </View>
            <View>
              <Text style={styles.UpWorkText}>Upwork</Text>
              <Text style={styles.todayText}>Today</Text>
            </View>
          </View>
          <View>
            <Text style={styles.upwork_income}>+ $ 850.00</Text>
          </View>
        </View>

        <View style={styles.girl_Maincontainer}>
          <View style={styles.up_Innercontainer}>
            <View style={styles.imge_container}>
              <Image style={styles.girl_image} source={girlsImage} />
            </View>
            <View>
              <Text style={styles.UpWorkText}>Transfer</Text>
              <Text style={styles.todayText}>Yesterday</Text>
            </View>
          </View>
          <View>
            <Text style={[styles.upwork_income, styles.morered]}>
              - $ 85.00
            </Text>
          </View>
        </View>

        <View style={styles.paypal_Maincontainer}>
          <View style={styles.up_Innercontainer}>
            <View style={styles.imge_container}>
              <Paypals />
            </View>
            <View>
              <Text style={styles.UpWorkText}>paypal</Text>
              <Text style={styles.todayText}>Jan 30, 2022</Text>
            </View>
          </View>
          <View>
            <Text style={styles.upwork_income}>+ $ 1,406.00</Text>
          </View>
        </View>

        <View style={styles.youtube_Maincontainer}>
          <View style={styles.up_Innercontainer}>
            <View style={styles.imge_container}>
              <YoutubeIcon />
            </View>
            <View>
              <Text style={styles.UpWorkText}>Youtube</Text>
              <Text style={styles.todayText}>Jan 16, 2022</Text>
            </View>
          </View>
          <View>
            <Text style={[styles.upwork_income, styles.morered]}>-$11.99</Text>
          </View>
        </View>
      </ScrollView>
    </View>
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
      // width: width > 400 ? 50 : 35,
      // height: width > 400 ? 50 : 35,
      padding: width > 400 ? 10 : 8,
      alignItems: 'center',
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
    upwork_income: {
      fontSize: width > 400 ? 18 : 14,
      fontFamily: FONT_FAMILY.interSemiBold,
      color: COLOR.shadeGreen,
      fontWeight: '600',
    },
    morered: {
      color: COLOR.red,
    },

    girl_Maincontainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 16,
      marginHorizontal: 22,
      alignItems: 'center',
    },

    girl_image: {
      width: width > 400 ? 30 : 24,
      height: width > 400 ? 30 : 20,
      borderRadius: 50,
    },

    paypal_Maincontainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 16,
      marginHorizontal: 22,
      alignItems: 'center',
    },

    paypal_image: {
      width: width > 400 ? 26 : 24,
      height: width > 400 ? 31 : 20,
    },

    youtube_Maincontainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 16,
      marginHorizontal: 22,
      alignItems: 'center',
    },

    youtube_image: {
      width: width > 400 ? 35 : 24,
      height: width > 400 ? 35 : 20,
    },
  });
}
