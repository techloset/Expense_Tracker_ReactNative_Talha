import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import React from 'react';

import UpIcon from '../../assets/Images/upIcon.svg';
import UPSvg from '../../assets/Images/upSvg.svg';
import Rectangular from '../../assets/Images/Rectangle.svg';
import Ellipse from '../../assets/Images/Ellipse.svg';
import Notification from '../../assets/Images/notification.svg';
import LessThan from '../../assets/Images/left.svg';

import IncomeData from './Income.json';

const IncomeScreen = ({navigation}) => {
  const styles = useStyles();

  return (
    <SafeAreaView style={{height: '100%', backgroundColor: 'white'}}>
      <View>
        <View style={styles.container_inner}>
          <Rectangular />
          <Ellipse style={styles.eelispse} />
        </View>
        <View style={styles.images_conatiner}>
          <TouchableOpacity onPress={() => navigation.push('AccountsWallet')}>
            <View style={styles.lessthen}>
              <LessThan />
            </View>
          </TouchableOpacity>
          <View>
            <Text style={styles.billPaymet}>Transaction Details</Text>
          </View>
          <View style={styles.notification}>
            <Notification />
          </View>
        </View>
      </View>

      <View style={styles.container}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <View style={styles.up_container}>
            <UPSvg />
          </View>
          <View style={styles.income_container}>
            <Text>Income</Text>
          </View>
          <Text style={styles.value}>$ 850.00</Text>
        </View>

        <View style={styles.tarnstionContaienr}>
          <View style={styles.indivdial_contianer}>
            <View>
              <Text style={styles.tansiototext}>Transaction details</Text>
            </View>
            <View>
              <UpIcon />
            </View>
          </View>

          <View style={{marginTop: 21}}>
            {IncomeData.map((item, index) => {
              return (
                <View key={index}>
                  <View
                    style={[styles.indivdial_contianer, styles.from_container]}>
                    <View>
                      <Text style={styles.container_text}>
                        {item.currentStatus}
                      </Text>
                    </View>
                    <View>
                      <Text
                        style={[
                          styles.container_text_other_income,
                          index === 0 ? {color: '#438883'} : {},
                        ]}>
                        {item.result}
                      </Text>
                    </View>
                  </View>
                  {index === 3 && <View style={styles.line1} />}
                  {index === 5 && <View style={styles.line1} />}
                </View>
              );
            })}
          </View>
        </View>

        <TouchableOpacity
          style={{alignItems: 'center'}}
          onPress={() => navigation.navigate('BillDetails')}>
          <View style={styles.Next_btn}>
            <Text style={styles.download}>Download Receipt</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default IncomeScreen;

function useStyles() {
  const {width, height} = useWindowDimensions();

  return StyleSheet.create({
    container: {
      position: 'absolute',
      backgroundColor: 'white',
      width: '100%',
      marginTop: 155,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
    },
    up_container: {
      width: width > 400 ? 80 : 50,
      height: width > 400 ? 80 : 50,
      backgroundColor: '#fafafa',
      borderRadius: 40,
      marginTop: 25,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    upworkImage: {
      width: width > 400 ? 46 : 35,
      height: width > 400 ? 40 : 30,
    },
    tarnstionContaienr: {
      marginTop: width > 400 ? 37 : 25,
    },
    income_container: {
      backgroundColor: '#4388831a',
      width: 80,
      borderRadius: 40,
      padding: 4,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 16,
    },
    textt: {
      color: '#438883',
      fontFamily: 'InterMedium',
      fontSize: 14,
    },
    value: {
      color: '#000000',
      fontFamily: 'InterSemiBold',
      fontSize: width > 400 ? 24 : 17,
      marginTop: 8,
    },
    tansiototext: {
      fontSize: width > 400 ? 18 : 14,
      fontFamily: 'InterMedium',
      color: '#000000',
    },
    indivdial_contianer: {
      flexDirection: 'row',
      marginHorizontal: 30,
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    container_text: {
      color: '#666666',
      fontSize: width > 400 ? 16 : 12,
      fontFamily: 'InterMedium',
    },
    from_container: {
      marginTop: width > 400 ? 12 : 14,
    },
    other_container: {
      marginTop: 10,
    },
    container_text_other: {
      color: '#000000',
      fontFamily: 'InterMedium',
      fontSize: width > 400 ? 16 : 12,
    },
    container_text_other_income: {
      color: '#000000',
      fontFamily: 'InterSemiBold',
      fontSize: width > 400 ? 16 : 12,
    },
    container_text_total: {
      fontFamily: 'InterSemiBold',
      fontSize: width > 400 ? 16 : 12,
      color: '#666666',
    },
    container_text_other_total: {
      fontFamily: 'InterSemiBold',
      fontSize: width > 400 ? 16 : 12,
      color: '#000000',
      fontWeight: '600',
    },
    line1: {
      borderTopWidth: 1,
      borderTopColor: '#DDDDDD',
      marginTop: width > 400 ? 20 : 12,
      marginHorizontal: 30,
      marginBottom: width > 400 ? 8 : 0,
    },
    Next_btn: {
      width: width > 400 ? 350 : 250,
      borderWidth: 1,
      borderColor: '#438883',
      borderRadius: 40,
      paddingHorizontal: width > 400 ? 10 : 8,
      paddingVertical: width > 400 ? 20 : 12,
      marginTop: width > 400 ? 40 : 30,
      alignItems: 'center',
    },
    download: {
      color: '#438883',
      fontFamily: 'InterSemiBold',
      fontSize: width > 400 ? 18 : 12,
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
    billPaymet: {
      color: '#ffffff',
      fontSize: width > 400 ? 18 : 14,
      fontFamily: 'InterSemiBold',
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
}
