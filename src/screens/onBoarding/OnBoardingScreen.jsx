import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  ImageBackground,
  Image,
} from 'react-native';
import imageBackround from '../../assets/OnBoardingBackground.png';
import Butoon from '../../component/button/Butoon';

const OnBoardingScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.stretch} source={imageBackround}>
        <Image
          style={styles.stretchImage}
          source={require('../../assets/specular_1.png')}
        />
      </ImageBackground>

      <View style={styles.container2}>
        <Text style={styles.heading}>spend smarter save more</Text>
        <Butoon />
        <View style={styles.text}>
          <Text>Already have an account?</Text>
          <Text style={styles.logInText}>Log In</Text>
        </View>
      </View>
    </View>
  );
};

export default OnBoardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  stretch: {
    height: 'auto',
  },
  stretchImage: {
    marginTop: 147,
    width: 277,
    height: 462,
    marginLeft: 61,
    marginRight: 75,
  },
  container2: {
    flex: 3,
    alignItems: 'center',
  },
  heading: {
    width: 301,

    textAlign: 'center',
    color: '#438883',
    fontSize: 36,
    fontWeight: '700',
    marginTop: 0,
  },
  text: {
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 14,
    marginTop: 10,
    fontWeight: '400',
  },
  logInText: {
    color: '#438883',
    fontWeight: '500',
  },
});
