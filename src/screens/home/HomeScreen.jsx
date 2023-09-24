import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ImageBackground,
} from 'react-native';
import React from 'react';
import imgae from '../../assets/Home_background.png';
import bell from '../../assets/bell-icon.png';
import arrowup from '../../assets/arrow-up-balance.png';
import arrowdown from '../../assets/arrow-down-balance.png';

const HomeScreen = ({navigation}) => {
  return (
    <View>
      {/* <Text>HomeScreen</Text> */}
      {/* <ImageBackground
        style={styles.stretch}
        source={require('../../assets/Home_background.png')}>

        </ImageBackground> */}
      <ImageBackground style={styles.imageBackground} source={imgae}>
        {/* <View style={styles.Ellipse_container}>
          <Image
            style={[styles.stretch,styles.circle_one]}
            source={require('../../assets/Ellipse_1.svg')}
          />
          <Image
            style={[styles.stretch,styles.circle_two]}
            source={require('../../assets/Ellipse_2.svg')}
          />
          <Image
            style={[styles.stretch,styles.circle_three]}
            source={require('../../assets/Ellipse_3.svg')}
          />
        </View> */}

        <View style={styles.top_images}>
          <Image source={require('../../assets/Group_ellipse.png')} />

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

      {/* <Button
        title="Go to Onboarding"
        onPress={() => navigation.navigate('OnBoarding')}
      /> */}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  imageBackground: {
    width: 414,
    height: 287,
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
    // alignContent:'center',
    alignItems: 'center',
    // padding:8.33,
    borderRadius: 4.17,
  },
  bell_icon: {
    width: 23,
    height: 23,
    padding: 8.33,
  },
  balnce_container: {
    width: 374,
    height: 201,
    backgroundColor: '#2e7e78',
    borderRadius: 20,
    position: 'absolute',
    top:155,
    left:20,
  },
  balance_inner1: {
    flex: 1,
    flexDirection: 'row',
    // justifyContent: 'space-around',
    justifyContent: 'space-between',
    // alignItems:'center',
    // alignContent:'center'
    // backgroundColor: 'red',
  },
  balnce_text: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
    marginTop: 25,
    marginLeft: 20,
    marginBottom: 8,
  },
  rupee: {
    marginLeft: 20,
    fontSize: 30,
    fontWeight: '700',
    color: '#ffffff',
  },
  dot: {
    marginTop: 35,
    marginRight: 20,
    color: '#eeeeee',
    fontSize: 20,
  },
  balance_inner2: {
    // backgroundColor: 'orange',
    flex: 1,
    flexDirection: 'row',
    // justifyContent: 'space-around',
    justifyContent: 'space-between',
    // alignItems:'center',
    // alignContent:'center'
    marginTop: 30,
  },
  arrow_container: {
    width: 24,
    height: 24,
    marginRight:9,
    borderRadius: 40,
    backgroundColor: '#ffffff26',
    justifyContent: 'center',
    // alignContent:'center',
    alignItems: 'center',
  },
  arrow_icon: {
    width: 18,
    height: 18,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  incomeText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#d0e5e3',
  },
  expenseText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#d0e5e3',
  },
  dollar: {
    fontSize: 20,
    fontWeight: '600',
    color: '#ffffff',
  },
  income_dollar: {
    marginLeft: 20,
  },
  expense_dollar: {
    marginRight: 20,
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
