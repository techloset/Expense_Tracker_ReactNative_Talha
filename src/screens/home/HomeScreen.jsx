import {StyleSheet, Text, View,Button,Image} from 'react-native';
import React from 'react';
// import Imgae from '../../assets/specular.png'

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Image
        style={styles.stretch}
        source={require('../../assets/specular_1.png')}
      />
      <Button
        title="Go to Onboarding"
        onPress={() => navigation.navigate('OnBoarding')}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
