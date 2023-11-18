import React from 'react';
import {View, Text, TouchableOpacity, Platform} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {FONT_FAMILY} from '../../lib/styles/GlobalStyles';

const GradientButton = ({navigation}) => {
  const buttonStyle = {
    marginTop: 26,
    padding: 20,
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#69AEA9', 
    ...Platform.select({
      android: {
        elevation: 12, 
      },
    }),
    borderRadius: 40,
  };

  return (
    <TouchableOpacity onPress={() => navigation.navigate('TabNavigation')}>
      <LinearGradient colors={['#69AEA9', '#3F8782']} style={buttonStyle}>
        <Text
          style={{
            color: '#fff',
            fontSize: 18,
            fontWeight: '600',
            fontFamily: FONT_FAMILY.interSemiBold,
          }}>
          Get Started
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default GradientButton;
