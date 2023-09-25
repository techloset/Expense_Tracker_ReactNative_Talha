import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import imageBackround from '../../assets/OnBoardingBackground.png';
import Butoon from '../../component/button/Butoon.jsx';

const OnBoardingScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.stretchFather}>
        <ImageBackground style={styles.stretch} source={imageBackround}>
          <Image
            style={styles.stretchImage}
            source={require('../../assets/specular_1.png')}
          />
        </ImageBackground>
      </View>

      <View style={styles.container2}>
        <Text style={styles.heading}>spend smarter save more</Text>
        <Butoon navigation={navigation}/>
        
        <TouchableOpacity style={styles.text}>
          <Text>Already have an account?</Text>
          <Text style={styles.logInText}>Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OnBoardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red',
  },
  stretchFather: {
    marginTop: -90,
  },
  stretch: {
    height: 'auto',
    // backgroundColor:'orange',
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
    marginTop: 30,
  },
  text: {
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 14,
    marginTop: 20,
    fontWeight: '400',
  },
  logInText: {
    color: '#438883',
    fontWeight: '500',
  },
});
