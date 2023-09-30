import React from 'react';
import { View,Text, StyleSheet, ImageBackground } from 'react-native';
import Rectangular from '../../assets/Images/Rectangle.svg';
import Ellipse from '../../assets/Images/Ellipse.svg';


const WalletComponentScreen = () => {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
      <ImageBackground  >
       <Rectangular>
       </Rectangular>
      </ImageBackground>
       <Ellipse style={styles.eelispse}/>
    </View>
      </View>
    );
  };
  
  export default WalletComponentScreen;
  
  const styles = StyleSheet.create({
    
    
    eelispse: {
      backgroundColor:'red',
    },
  });
  