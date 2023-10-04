import {StyleSheet, Text, View, SafeAreaView, Image,TouchableOpacity} from 'react-native';
import React from 'react';
// import WalletComponentScreen from '../../component/transcationComponent/WalletComponentScreen';
// import { SafeAreaView } from 'react-native-safe-area-context'
import UpSvg from '../../assets/Images/upSvg.svg';
import UpIcon from '../../assets/Images/upIcon.svg';

import Rectangular from '../../assets/Images/Rectangle.svg';
import Ellipse from '../../assets/Images/Ellipse.svg';
import Notification from '../../assets/Images/notification.svg';
import LessThan from '../../assets/Images/lessThan.png';
const IncomeScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <View>
        <View style={styles.container_inner}>
          <Rectangular />
          <Ellipse style={styles.eelispse} />
        </View>
        <View style={styles.images_conatiner}>
          <View style={styles.lessthen}>
            <Image style={{width: 23, height: 23}} source={LessThan} />
          </View>
          <View style={styles.notification}>
            <Notification />
          </View>
        </View>
      </View>
      {/* <WalletComponentScreen /> */}
      {/* <Text>IncomeScreen</Text> */}

      <View style={styles.container}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <View style={styles.up_container}>
            <UpSvg style={styles.up} />
          </View>
          <View style={styles.income_container}>
            <Text>Income</Text>
          </View>
          <Text style={styles.value}>$ 850.00</Text>
        </View>

        <View style={{marginTop: 37}}>
          <View style={styles.indivdial_contianer}>
            <View>
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: 'InterMedium',
                  color: '#000000',
                }}>
                Transaction details
              </Text>
            </View>
            <View>
              <UpIcon />
            </View>
          </View>

          <View style={[styles.indivdial_contianer, styles.from_container]}>
            <View>
              <Text style={styles.container_text}>Status</Text>
            </View>
            <View>
              <Text style={styles.container_text_other_income}>Income</Text>
            </View>
          </View>

          <View style={[styles.indivdial_contianer, styles.other_container]}>
            <View>
              <Text style={styles.container_text}>From</Text>
            </View>
            <View>
              <Text style={styles.container_text_other}>Upwork Escrow</Text>
            </View>
          </View>
          <View style={[styles.indivdial_contianer, styles.other_container]}>
            <View>
              <Text style={styles.container_text}>Time</Text>
            </View>
            <View>
              <Text style={styles.container_text_other}>10:00 AM</Text>
            </View>
          </View>

          <View style={[styles.indivdial_contianer, styles.other_container]}>
            <View>
              <Text style={styles.container_text}>Date</Text>
            </View>
            <View>
              <Text style={styles.container_text_other}>Feb 30, 2022</Text>
            </View>
          </View>
          <View style={styles.line1}></View>
          <View style={[styles.indivdial_contianer, styles.other_container]}>
            <View>
              <Text style={styles.container_text}>Earnings</Text>
            </View>
            <View>
              <Text style={styles.container_text_other}>$ 870.00</Text>
            </View>
          </View>
          <View style={[styles.indivdial_contianer, styles.other_container]}>
            <View>
              <Text style={styles.container_text}>Fee</Text>
            </View>
            <View>
              <Text style={styles.container_text_other}>- $ 20.00</Text>
            </View>
          </View>
          <View style={styles.line1}></View>
          <View style={[styles.indivdial_contianer, styles.other_container]}>
            <View>
              <Text style={styles.container_text_total}>Total</Text>
            </View>
            <View>
              <Text style={styles.container_text_other_total}>- $ 85.00</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('BillDetails')}>
        <View style={styles.Next_btn}>
          <Text style={styles.download}>Download Receipt</Text>
        </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default IncomeScreen;

const styles = StyleSheet.create({
  container: {
    // flex:1,
    position: 'absolute',
    backgroundColor: 'white',
    // backgroundColor: 'red',
    width: '100%',
    // height:'290%',
    marginTop: 155,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  up_container: {
    width: 80,
    height: 80,
    backgroundColor: '#fafafa',
    borderRadius: 40,
    marginTop: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginLeft:167
    // alignContent:'center'
  },
  up: {
    // justifyContent:'center',
    // alignItems:'center'
  },
  income_container: {
    backgroundColor: '#4388831a',
    width: 80,
    borderRadius: 40,
    padding: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  textt: {
    color: '#438883',
    fontFamily: 'InterMedium',
    fontSize: 14,
  },
  value: {
    color: '#000000',
    fontFamily: 'InterSemiBold',
    fontSize: 24,
    // marginTop: 8,
  },
  indivdial_contianer: {
    flexDirection: 'row',
    marginHorizontal: 30,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  container_text: {
    color: '#666666',
    fontSize: 16,
    fontFamily: 'InterMedium',
  },
  from_container: {
    marginTop: 18,
  },
  other_container: {
    marginTop: 10,
  },
  container_text_other: {
    color: '#000000',
    fontFamily: 'InterMedium',
    fontSize: 16,
  },
  container_text_other_income: {
    color: '#438883',
    fontFamily: 'InterSemiBold',
    fontSize: 16,
  },
  container_text_total: {
    fontFamily: 'InterSemiBold',
    fontSize: 16,
    color: '#666666',
  },
  container_text_other_total: {
    fontFamily: 'InterSemiBold',
    fontSize: 16,
    color: '#000000',
    fontWeight: '600',
  },
  line1: {
    borderTopWidth: 1,
    borderTopColor: '#DDDDDD',
    marginTop: 20,
    marginHorizontal: 30,
    marginBottom: 8,
  },
  Next_btn: {
    // height: 100,
    width: 350,
    borderWidth: 1,
    borderColor: '#438883',
    borderRadius: 40,
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginTop: 40,
    // marginBottom:31
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 32,
    marginBottom: 20,
  },
  download: {
    color: '#438883',
    fontFamily: 'InterSemiBold',
    fontSize: 18,
  },

  eelispse: {
    position: 'absolute',
  },
  images_conatiner: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 78,
  },

  notification: {
    width: 40,
    height: 40,
    borderRadius: 6.67,
    padding: 8.33,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 24,
  },
  lessthen: {
    marginLeft: 24,
  },
});
