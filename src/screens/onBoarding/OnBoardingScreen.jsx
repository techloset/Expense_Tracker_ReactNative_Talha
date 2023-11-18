import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import imageBackround from '../../assets/Images/OnBoardingBackground1.png';
import Butoon from '../../component/button/Butoon.jsx';
import {COLOR, FONT_FAMILY} from '../../lib/styles/GlobalStyles';

const OnBoardingScreen = ({navigation}) => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <View style={styles.stretchFather}>
        <ImageBackground source={imageBackround}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image
              style={styles.stretchImage}
              source={require('../../assets/Images/man.png')}
            />
          </View>
        </ImageBackground>
      </View>

      <View>
        <View style={styles.container2}>
          <Text style={styles.heading}>Spend Smarter Save More</Text>
        </View>
        <View
          style={{
            marginHorizontal: 20,
          }}>
          <Butoon navigation={navigation} />
        </View>
      </View>
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity style={styles.text}>
          <Text style={styles.textAccount}>Already have an account? </Text>
          <Text style={styles.logInText}>Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OnBoardingScreen;

function useStyles() {
  const {width, height} = useWindowDimensions();
  return StyleSheet.create({
    container: {
      height: '100%',
      backgroundColor: COLOR.white,
    },
    stretchImage: {
      marginTop: width > 400 ? 127 : 50,
    },
    container2: {
      alignItems: 'center',
      marginHorizontal: 56,
      marginHorizontal: width > 400 ? 56 : 88,
    },
    heading: {
      fontSize: width > 400 ? 36 : 22,
      color: COLOR.green,
      fontFamily: FONT_FAMILY.interBold,
      textAlign: 'center',
      fontWeight: '700',
    },
    text: {
      flexDirection: 'row',

      marginTop: width > 400 ? 20 : 10,
      fontFamily: FONT_FAMILY.interRegular,
    },
    textAccount: {
      fontSize: 14,
      fontWeight: '400',
      color: COLOR.shahdedGray,
      fontFamily: FONT_FAMILY.interRegular,
    },
    logInText: {
      color: COLOR.green,
      fontSize: 14,
      fontWeight: '400',
      fontFamily: FONT_FAMILY.interRegular,
    },
  });
}
