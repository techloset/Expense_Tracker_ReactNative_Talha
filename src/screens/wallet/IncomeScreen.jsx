import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
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
import IncomeData from '../../lib/const/Income.json';
import {COLOR, FONT_FAMILY} from '../../lib/styles/GlobalStyles';

const IncomeScreen = ({navigation}) => {
  const styles = useStyles();

  return (
    <SafeAreaView style={{height: '100%', backgroundColor: COLOR.white}}>
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
                          index === 0 ? {color: COLOR.green} : {},
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
  const {width} = useWindowDimensions();

  return StyleSheet.create({
    container: {
      position: 'absolute',
      backgroundColor: COLOR.white,
      width: '100%',
      marginTop: 155,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
    },
    up_container: {
      width: width > 400 ? 80 : 50,
      height: width > 400 ? 80 : 50,
      backgroundColor: COLOR.LightWhite,
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
      backgroundColor: COLOR.shadeGray,
      width: 80,
      borderRadius: 40,
      padding: 4,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 16,
    },
    textt: {
      color: COLOR.green,
      fontFamily: FONT_FAMILY.interMedium,
      fontSize: 14,
    },
    value: {
      color: COLOR.black,
      fontFamily: FONT_FAMILY.interSemiBold,
      fontSize: width > 400 ? 24 : 17,
      marginTop: 8,
    },
    tansiototext: {
      fontSize: width > 400 ? 18 : 14,
      fontFamily: FONT_FAMILY.interMedium,
      color: COLOR.black,
    },
    indivdial_contianer: {
      flexDirection: 'row',
      marginHorizontal: 30,
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    container_text: {
      color: COLOR.SecondaryGrey,
      fontSize: width > 400 ? 16 : 12,
      fontFamily: FONT_FAMILY.interMedium,
    },
    from_container: {
      marginTop: width > 400 ? 12 : 14,
    },
    other_container: {
      marginTop: 10,
    },
    container_text_other: {
      color: COLOR.black,
      fontFamily: FONT_FAMILY.interMedium,
      fontSize: width > 400 ? 16 : 12,
    },
    container_text_other_income: {
      color: COLOR.black,
      fontFamily: FONT_FAMILY.interSemiBold,
      fontSize: width > 400 ? 16 : 12,
    },
    container_text_total: {
      fontFamily: FONT_FAMILY.interSemiBold,
      fontSize: width > 400 ? 16 : 12,
      color: COLOR.SecondaryGrey,
    },
    container_text_other_total: {
      fontFamily: FONT_FAMILY.interSemiBold,
      fontSize: width > 400 ? 16 : 12,
      color: COLOR.black,
      fontWeight: '600',
    },
    line1: {
      borderTopWidth: 1,
      borderTopColor: COLOR.borderColor,
      marginTop: width > 400 ? 20 : 12,
      marginHorizontal: 30,
      marginBottom: width > 400 ? 8 : 0,
    },
    Next_btn: {
      width: width > 400 ? 350 : 250,
      borderWidth: 1,
      borderColor: COLOR.green,
      borderRadius: 40,
      paddingHorizontal: width > 400 ? 10 : 8,
      paddingVertical: width > 400 ? 20 : 12,
      marginTop: width > 400 ? 40 : 30,
      alignItems: 'center',
    },
    download: {
      color: COLOR.green,
      fontFamily: FONT_FAMILY.interSemiBold,
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
      color: COLOR.white,
      fontSize: width > 400 ? 18 : 14,
      fontFamily: FONT_FAMILY.interSemiBold,
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
