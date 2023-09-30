import {StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import WalletComponentScreen from '../../component/button/WalletComponentScreen';
import TransactionScreen from '../../component/button/TransactionScreen';

const WalletScreen = () => {
  return (
    <SafeAreaView>
      <WalletComponentScreen />
      <View style={styles.container}>
       <TransactionScreen/>
      </View>
    </SafeAreaView>
  );
};

export default WalletScreen;

const styles = StyleSheet.create({
  container: {
    // flex:1,
    position: 'absolute',
    backgroundColor: 'red',
    width:'100%',
    height:'100%',
    marginTop: 165,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
});
