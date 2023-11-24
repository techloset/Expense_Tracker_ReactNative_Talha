import React,{useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import NaviagtionsScreen from './src/navigation/NaviagtionsScreen';
// import WalletNvigation from './src/navigation/WalletNvigation';
import SplashScreen from 'react-native-splash-screen'
import { PaperProvider } from 'react-native-paper';

const LotsOfStyles = () => {

  useEffect(() => {
    SplashScreen.hide()
  
  }, [])
  
 
  return (
      <PaperProvider>
        <NaviagtionsScreen/>
      </PaperProvider>
  );
};

const styles = StyleSheet.create({
 
});

export default LotsOfStyles;
