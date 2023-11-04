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
import imageBackround from '../../assets/Images/OnBoardingBackground.png';
import Butoon from '../../component/button/Butoon.jsx';

const OnBoardingScreen = ({navigation}) => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <View style={styles.stretchFather}>
        <ImageBackground style={styles.stretch} source={imageBackround}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image
              style={styles.stretchImage}
              source={require('../../assets/Images/specular_1.png')}
            />
          </View>
        </ImageBackground>
      </View>

      <View>
        <View style={styles.container2}>
          <Text style={styles.heading}>spend smarter save more</Text>
        </View>
        <View style={{marginHorizontal: 20}}>
          <Butoon navigation={navigation} />
        </View>
      </View>
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity style={styles.text}>
          <Text>Already have an account?</Text>
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
      backgroundColor: '#ffffff',
    },
    stretchImage: {
      marginTop: width > 400 ? 127 : 50,
    },
    container2: {
      // flex: 3,
      alignItems: 'center',
      marginHorizontal: 56,
      marginHorizontal: width > 400 ? 56 : 88,
    },
    heading: {
      fontSize: width > 400 ? 36 : 22,
      color: '#438883',
      fontFamily: 'InterBold',
      textAlign: 'center',
    },
    text: {
      flexDirection: 'row',
      fontSize: 14,
      fontWeight: '400',
      marginTop: width > 400 ? 20 : 10,
      fontFamily: 'InterRegular',
    },
    logInText: {
      color: '#438883',
      fontWeight: '500',
    },
  });
}
