import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import WalletComponentScreen from '../../component/transcationComponent/WalletComponentScreen';
import UpcommingBills from '../../component/transcationComponent/UpcomingScreen';


const WalletScreen_upcomingBills = () => {
  return (
    <View>
      <WalletComponentScreen/>
      <View style={styles.container}>
       <UpcommingBills/>
      </View>
    </View>
  )
}

export default WalletScreen_upcomingBills

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
})