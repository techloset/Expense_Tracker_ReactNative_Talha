import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import imgae from '../../assets/Images/Home_background.png';
import Notification from '../../assets/Images/notification.svg';
import ArrowUp from '../../assets/Images/ArrowUp.svg';
import Arrowdown from '../../assets/Images/Arrowdown.svg';
import Image_71 from '../../assets/Images/image71.png';
import Image_72 from '../../assets/Images/image72.png';
import Image_73 from '../../assets/Images/image73.png';
import Image_74 from '../../assets/Images/image74.png';
import Image_75 from '../../assets/Images/image75.png';
import {COLOR} from '../../lib/styles/GlobalStyles';
import HomeCompenent from '../../component/transcationComponent/HomeCompenent';

const HomeScreen = ({navigation}) => {
  const styles = useStyles();
  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <View style={styles.parrent}>
        <ImageBackground style={styles.imageBackground} source={imgae}>
          <View style={styles.top_images}>
            <Image source={require('../../assets/Images/Group_ellipse.png')} />

            <View style={styles.bell_container}>
              <Notification />
            </View>

            <View style={styles.balnce_container}>
              <View style={styles.balance_inner1}>
                <View>
                  <Text style={styles.balnce_text}>Total Balance ^</Text>
                  <Text style={styles.rupee}>$2548.00</Text>
                </View>
                <View>
                  <Text style={styles.dot}>...</Text>
                </View>
              </View>

              <View style={styles.balance_inner2}>
                <View>
                  <View
                    style={[
                      styles.income_expense_container,
                      styles.income_second_container,
                    ]}>
                    <View style={styles.arrow_container}>
                      <Arrowdown />
                    </View>
                    <Text style={styles.incomeText}>Income</Text>
                  </View>
                  <Text style={[styles.dollar, styles.income_dollar]}>
                    $1840.00
                  </Text>
                </View>

                <View style={styles.expense_main_container}>
                  <View
                    style={[
                      styles.income_expense_container,
                      styles.expense_second_container,
                    ]}>
                    <View style={styles.arrow_container}>
                      <ArrowUp />
                    </View>
                    <Text style={styles.expenseText}>Expense</Text>
                  </View>
                  <Text style={[styles.dollar, styles.expense_dollar]}>
                    $240.00
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.transactionHistroy_Container}>
        <Text style={styles.transactionHistroy}>Transactions history</Text>
        <Text style={styles.seeAll}> See all</Text>
      </View>

      <HomeCompenent />

      <View style={styles.SendAgain_Container}>
        <Text style={styles.transactionHistroy}>Send Again</Text>
        <Text style={styles.seeAll}> See all</Text>
      </View>

      <View style={styles.fiveImages}>
        <View>
          <Image style={styles.imageFle_image} source={Image_71} />
        </View>
        <View>
          <Image style={styles.imageFle_image} source={Image_72} />
        </View>
        <View>
          <Image style={styles.imageFle_image} source={Image_73} />
        </View>
        <View>
          <Image style={styles.imageFle_image} source={Image_74} />
        </View>
        <View>
          <Image style={styles.imageFle_image} source={Image_75} />
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

function useStyles() {
  const {width, height} = useWindowDimensions();
  return StyleSheet.create({
    fiveImages: {
      marginTop: 13,
      flexDirection: 'row',
      marginLeft: 22,
      marginRight: 18,
      justifyContent: 'space-between',
    },
    imageFle_image: {
      height: width > 400 ? 62 : 50,
      width: width > 400 ? 62 : 50,
      borderRadius: 50,
    },

    upwork_image: {
      width: width > 400 ? 34 : 24,
      height: width > 400 ? 30 : 20,
    },

    SendAgain_Container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 22,
      marginTop: width > 400 ? 30 : 0,
    },
    transactionHistroy_Container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 22,
      marginTop: 101,
    },
    transactionHistroy: {
      fontSize: width > 400 ? 18 : 14,
      fontFamily: 'InterSemiBold',
      color: COLOR.black,
    },
    seeAll: {
      fontSize: width > 400 ? 16 : 13,
      fontWeight: '400',
      fontFamily: 'InterRegular',
      color: COLOR.SecondaryGrey,
    },
    parrent: {
      height: width > 400 ? 287 : 267,
    },
    expense_main_container: {
      marginBottom: width > 400 ? 29 : 10,
    },
    imageBackground: {
      height: width > 400 ? 287 : 287,
    },
    top_images: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    bell_container: {
      marginTop: 78,
      marginRight: 24,
      width: 40,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 4.17,
    },
    bell_icon: {
      width: 23,
      height: 23,
      padding: 8.33,
    },
    balnce_container: {
      width: width > 400 ? 374 : '88%',
      backgroundColor: COLOR.greenPrimary,
      borderRadius: 20,
      position: 'absolute',
      top: width > 400 ? 155 : 170,
      left: 20,
    },
    balance_inner1: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    balnce_text: {
      fontSize: width > 400 ? 16 : 12,
      color: COLOR.white,
      marginTop: 25,
      marginLeft: 20,
      marginBottom: 8,
      fontFamily: 'InterSemiBold',
    },
    rupee: {
      marginLeft: 20,
      fontSize: width > 400 ? 30 : 15,
      color: COLOR.white,
      fontFamily: 'InterBold',
    },
    dot: {
      marginTop: 35,
      marginRight: 20,
      color: COLOR.LightGrey,
      fontSize: width > 400 ? 20 : 15,
    },
    balance_inner2: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: width > 400 ? 30 : 30,
    },
    arrow_container: {
      width: width > 400 ? 24 : 20,
      height: width > 400 ? 24 : 20,
      marginRight: 9,
      borderRadius: 40,
      backgroundColor: COLOR.DimGrey,
      justifyContent: 'center',
      alignItems: 'center',
    },

    incomeText: {
      fontSize: width > 400 ? 16 : 13,
      fontFamily: 'InterMedium',
      color: COLOR.LightGrey,
    },
    expenseText: {
      fontSize: width > 400 ? 18 : 14,
      color: COLOR.LightGrey,
      fontFamily: 'InterMedium',
    },
    dollar: {
      fontSize: width > 400 ? 20 : 14,
      color: COLOR.white,
      marginTop: 6,
      fontFamily: 'InterSemiBold',
    },
    income_dollar: {
      marginLeft: 20,
    },
    expense_dollar: {
      marginLeft: 30,
    },
    income_expense_container: {
      flexDirection: 'row',
    },
    income_second_container: {
      marginLeft: 18,
    },
    expense_second_container: {
      marginRight: 20,
    },
  });
}
