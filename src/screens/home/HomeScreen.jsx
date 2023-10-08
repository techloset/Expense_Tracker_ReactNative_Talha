import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ImageBackground,
  ScrollView,
  useWindowDimensions,
  Dimensions,
} from 'react-native';
import React from 'react';
import imgae from '../../assets/Images/Home_background.png';
import bell from '../../assets/Images/bell-icon.png';
import arrowup from '../../assets/Images/arrow-up-balance.png';
import arrowdown from '../../assets/Images/arrow-down-balance.png';
import UpWork from '../../assets/Images/upIcon.png';
import girlsImage from '../../assets/Images/image7.png';
import PaypalIcon from '../../assets/Images/paypalIcon.png';
import YoutubeIcon from '../../assets/Images/youtubeIcon.png';
import Image_71 from '../../assets/Images/image71.png';
import Image_72 from '../../assets/Images/image72.png';
import Image_73 from '../../assets/Images/image73.png';
import Image_74 from '../../assets/Images/image74.png';
import Image_75 from '../../assets/Images/image75.png';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const HomeScreen = ({navigation}) => {
  const styles = useStyles();
  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <View style={styles.parrent}>
        <ImageBackground style={styles.imageBackground} source={imgae}>
          <View style={styles.top_images}>
            <Image source={require('../../assets/Images/Group_ellipse.png')} />

            <View style={styles.bell_container}>
              <Image style={styles.bell_icon} source={bell} />
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
                <View style={styles.income_main_container}>
                  <View
                    style={[
                      styles.income_expense_container,
                      styles.income_second_container,
                    ]}>
                    <View style={styles.arrow_container}>
                      <Image style={styles.arrow_icon} source={arrowup} />
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
                      <Image style={styles.arrow_icon} source={arrowdown} />
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

      <ScrollView style={styles.scrollConatianer}>
        <View style={styles.up_Maincontainer}>
          <View style={styles.up_Innercontainer}>
            <View style={styles.imge_container}>
              <Image style={styles.upwork_image} source={UpWork} />
            </View>
            <View>
              <Text style={styles.UpWorkText}>Upwork</Text>
              <Text style={styles.todayText}>Today</Text>
            </View>
          </View>
          <View>
            <Text style={styles.upwork_income}>+ $ 850.00</Text>
          </View>
        </View>

        <View style={styles.girl_Maincontainer}>
          <View style={styles.up_Innercontainer}>
            <View style={styles.imge_container}>
              <Image style={styles.girl_image} source={girlsImage} />
            </View>
            <View>
              <Text style={styles.UpWorkText}>Transfer</Text>
              <Text style={styles.todayText}>Yesterday</Text>
            </View>
          </View>
          <View>
            <Text style={styles.upwork_income}>- $ 85.00</Text>
          </View>
        </View>

        <View style={styles.paypal_Maincontainer}>
          <View style={styles.up_Innercontainer}>
            <View style={styles.imge_container}>
              <Image style={styles.paypal_image} source={PaypalIcon} />
            </View>
            <View>
              <Text style={styles.UpWorkText}>paypal</Text>
              <Text style={styles.todayText}>Jan 30, 2022</Text>
            </View>
          </View>
          <View>
            <Text style={styles.upwork_income}>+ $ 1,406.00</Text>
          </View>
        </View>

        <View style={styles.youtube_Maincontainer}>
          <View style={styles.up_Innercontainer}>
            <View style={styles.imge_container}>
              <Image style={styles.youtube_image} source={YoutubeIcon} />
            </View>
            <View>
              <Text style={styles.UpWorkText}>Youtube</Text>
              <Text style={styles.todayText}>Jan 16, 2022</Text>
            </View>
          </View>
          <View>
            <Text style={styles.upwork_income}>-$11.99</Text>
          </View>
        </View>

        <View style={styles.paypal_Maincontainer}>
          <View style={styles.up_Innercontainer}>
            <View style={styles.imge_container}>
              <Image style={styles.paypal_image} source={PaypalIcon} />
            </View>
            <View>
              <Text style={styles.UpWorkText}>paypal</Text>
              <Text style={styles.todayText}>Jan 30, 2022</Text>
            </View>
          </View>
          <View>
            <Text style={styles.upwork_income}>+ $ 1,406.00</Text>
          </View>
        </View>
        
        <View style={styles.youtube_Maincontainer}>
          <View style={styles.up_Innercontainer}>
            <View style={styles.imge_container}>
              <Image style={styles.youtube_image} source={YoutubeIcon} />
            </View>
            <View>
              <Text style={styles.UpWorkText}>Youtube</Text>
              <Text style={styles.todayText}>Jan 16, 2022</Text>
            </View>
          </View>
          <View>
            <Text style={styles.upwork_income}>-$11.99</Text>
          </View>
        </View>
        <View style={styles.youtube_Maincontainer}>
          <View style={styles.up_Innercontainer}>
            <View style={styles.imge_container}>
              <Image style={styles.youtube_image} source={YoutubeIcon} />
            </View>
            <View>
              <Text style={styles.UpWorkText}>Youtube</Text>
              <Text style={styles.todayText}>Jan 16, 2022</Text>
            </View>
          </View>
          <View>
            <Text style={styles.upwork_income}>-$11.99</Text>
          </View>
        </View>
        

       
       
       
      </ScrollView>

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
  // console.log()
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
    youtube_Maincontainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 16,
      marginHorizontal: 22,
      alignItems: 'center',
    },
    paypal_Maincontainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 16,
      marginHorizontal: 22,
      alignItems: 'center',
    },
    girl_Maincontainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 16,
      marginHorizontal: 22,
      alignItems: 'center',
    },
    up_Maincontainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: width > 400 ? 19 : 5,
      marginHorizontal: 22,
      alignItems: 'center',
    },
    up_Innercontainer: {
      flexDirection: 'row',
      gap: 10,
    },
    imge_container: {
      backgroundColor: '#f0f6f5',
      width: width > 400 ? 50 : 35,
      height: width > 400 ? 50 : 35,
      padding: width > 400 ? 10 : 8,
      alignItems: 'center',
      borderRadius: 8,
    },
    upwork_image: {
      width: width > 400 ? 34 : 24,
      height: width > 400 ? 30 : 20,
    },
    girl_image: {
      width: width > 400 ? 30 : 24,
      height: width > 400 ? 30 : 20,
      borderRadius: 50,
    },
    paypal_image: {
      width: width > 400 ? 26 : 24,
      height: width > 400 ? 31 : 20,
    },
    youtube_image: {
      width: width > 400 ? 35 : 24,
      height: width > 400 ? 35 : 20,
    },
    UpWorkText: {
      fontSize: width > 400 ? 16 : 12,
      fontFamily: 'InterMedium',
      color: '#000000',
    },
    todayText: {
      marginTop: width > 400 ? 6 : 0,
      fontSize: width > 400 ? 13 : 10,
      fontFamily: 'InterRegular',
      
    },
    upwork_income: {
      fontSize: width > 400 ? 18 : 14,
      fontFamily: 'InterSemiBold',
      color: '#24a869',
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
      color: '#000000',
    },
    seeAll: {
      fontSize: width > 400 ? 16 : 13,
      fontWeight: '400',
      fontFamily: 'InterRegular',
      color: '#666666',
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
      backgroundColor: '#ffffff0f',
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
    scrollConatianer: {
    },
    balnce_container: {
      width: width > 400 ? 374 : '88%',
      backgroundColor: '#2e7e78',
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
      color: '#ffffff',
      marginTop: 25,
      marginLeft: 20,
      marginBottom: 8,
      fontFamily: 'InterSemiBold',
    },
    rupee: {
      marginLeft: 20,
      fontSize: width > 400 ? 30 : 15,
      color: '#ffffff',
      fontFamily: 'InterBold',
    },
    dot: {
      marginTop: 35,
      marginRight: 20,
      color: '#eeeeee',
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
      backgroundColor: '#ffffff26',
      justifyContent: 'center',
      alignItems: 'center',
    },
    arrow_icon: {
      width: width > 400 ? 18 : 10,
      height: width > 400 ? 18 : 14,
    },
    incomeText: {
      fontSize: width > 400 ? 16 : 13,
      fontFamily: 'InterMedium',
      color: '#d0e5e3',
    },
    expenseText: {
      fontSize: width > 400 ? 18 : 14,
      color: '#d0e5e3',
      fontFamily: 'InterMedium',
    },
    dollar: {
      fontSize: width > 400 ? 20 : 14,
      color: '#ffffff',
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
