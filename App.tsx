import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import NaviagtionsScreen from './src/navigation/NaviagtionsScreen';
// import WalletNvigation from './src/navigation/WalletNvigation';
import { PaperProvider } from 'react-native-paper';

const LotsOfStyles = () => {
 
  return (
      <PaperProvider>
        <NaviagtionsScreen/>
      </PaperProvider>
  );
};

const styles = StyleSheet.create({
 
});

export default LotsOfStyles;
