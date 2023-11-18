import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  useWindowDimensions,
  ImageBackground,
} from 'react-native';
import React from 'react';

import UpIcon from '../../assets/Images/upIcon.svg';
import UPSvg from '../../assets/Images/upSvg.svg';
import Ellipse from '../../assets/Images/Ellipse.svg';
import Notification from '../../assets/Images/notification.svg';
import LessThan from '../../assets/Images/left.svg';
import IncomeData from '../../lib/const/Income.json';
import {COLOR, FONT_FAMILY} from '../../lib/styles/GlobalStyles';
import Home_background from '../../assets/Images/Home_background.png';

const IncomeScreen = ({navigation}) => {
  const styles = useStyles();

  return (
    <SafeAreaView style={{height: '100%', backgroundColor: COLOR.white}}>
      <ImageBackground style={styles.imageBackground} source={Home_background}>
        <View style={{position: 'absolute'}}>
          <Ellipse />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 78,
            marginHorizontal: 24,
          }}>
          <View style={{}}>
            <TouchableOpacity onPress={() => navigation.push('AccountsWallet')}>
              <View>
                <LessThan />
              </View>
            </TouchableOpacity>
          </View>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '600',
              fontFamily: FONT_FAMILY.interSemiBold,
              color: COLOR.white,
            }}>
            Transaction Details
          </Text>
          <Notification />
        </View>
      </ImageBackground>

      <View style={styles.container}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <View style={styles.up_container}>
            <UPSvg />
          </View>
          <View style={styles.income_container}>
            <Text style={styles.incomeText}>Income</Text>
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
    imageBackground: {
      height: width > 400 ? 287 : 287,
    },
    container: {
      position: 'absolute',
      backgroundColor: COLOR.white,
      width: '100%',
      marginTop: 155,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
    },
    up_container: {
      width: width > 400 ? 80 : 70,
      height: width > 400 ? 80 : 70,
      backgroundColor: COLOR.LightWhite,
      borderRadius: 40,
      marginTop: 25,
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
    incomeText: {
      color: COLOR.green,
      fontFamily: FONT_FAMILY.interMedium,
      fontSize: width > 400 ? 14 : 12,
      fontWeight: '500',
    },
    value: {
      color: COLOR.black,
      fontFamily: FONT_FAMILY.interSemiBold,
      fontSize: width > 400 ? 24 : 20,
      marginTop: 8,
      fontWeight: '600',
    },
    tansiototext: {
      fontSize: width > 400 ? 18 : 16,
      fontFamily: FONT_FAMILY.interMedium,
      color: COLOR.black,
      fontWeight: '500',
    },
    indivdial_contianer: {
      flexDirection: 'row',
      marginHorizontal: 30,
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    container_text: {
      color: COLOR.SecondaryGrey,
      fontSize: width > 400 ? 16 : 14,
      fontFamily: FONT_FAMILY.interMedium,
      fontWeight: '500',
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
      fontSize: width > 400 ? 16 : 14,
      fontWeight: '500',
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
      width: width > 400 ? 350 : 280,
      borderWidth: 1,
      borderColor: COLOR.green,
      borderRadius: 40,
      paddingHorizontal: width > 400 ? 10 : 8,
      paddingVertical: width > 400 ? 20 : 15,
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
      fontSize: width > 400 ? 18 : 16,
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
