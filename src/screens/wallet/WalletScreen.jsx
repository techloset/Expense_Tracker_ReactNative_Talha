import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import WalletComponentScreen from '../../component/transcationComponent/WalletComponentScreen';
import TransactionScreen from '../../component/transcationComponent/TransactionScreen';

const WalletScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <WalletComponentScreen />
      <View style={styles.container}>
       <TransactionScreen navigation={navigation}/>
      </View>
    </SafeAreaView>
  );
};

export default WalletScreen;

const styles = StyleSheet.create({
  container: {
    // flex:1,
    position: 'absolute',
    backgroundColor: 'white',
    width:'100%',
    // height:'290%',
    marginTop: 165,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
});
