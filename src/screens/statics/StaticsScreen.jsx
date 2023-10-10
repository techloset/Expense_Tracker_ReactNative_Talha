import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
} from 'react-native';
import Download from '../../assets/Images/download.svg';
import LessThanBlack from '../../assets/Images/Lessthanblack.svg';
import Sort from '../../assets/Images/sort.svg';
import Starbucks from '../../assets/Images/starbucks.svg';


import React from 'react';
import {LineChart} from 'react-native-chart-kit';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

// console.log(windowWidth);
// console.log(windowHeight + ' heelo');

export const StaticsScreen = ({navigation}) => {

  

  const styles = useStyles();
  return (
    <View style={{}}>
      <View style={styles.staticContainer}>
        <View style={{height: 28, width: 28}}>
          <LessThanBlack />
        </View>
        <Text style={styles.text1}>Statistics</Text>
        <View style={{height: 28, width: 28}}>
          <Download />
        </View>
      </View>

      <View style={{marginTop: 50}}>
        <LineChart
          data={{
            labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
              {
                data: [0, 25, 20, 30, 40, 25, 35],
              },
            ],
          }}
          width={Dimensions.get('window').width} // from react-native
          height={220}
          yAxisLabel=""
          yAxisSuffix=""
          // yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: '#ffffff',
            backgroundGradientFrom: '#ffffff',
            backgroundGradientTo: '#ffffff',
            decimalPlaces: 2, // optional, defaults to 2dp

            color: (opacity = 1) => `rgba(67, 136, 131, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '0',
              // strokeWidth: '2',
              // stroke: '#ffa726',
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </View>

      <View style={styles.papacontainer}>
        <View style={styles.topspenddContainer}>
          <View>
            <Text style={styles.text1}>Top Spending</Text>
          </View>
          <View style={{height: 28, width: 28}}>
            <Sort />
          </View>
        </View>

        <View style={[styles.card_container, styles.car_container_bgGray]}>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.circle_bank}>
              <Starbucks />
            </View>
            <View>
              <Text style={styles.bankLink}>Bank Link</Text>
              <View style={styles.othertext_content}>
                <Text style={styles.othertext_contents}>Jan 12, 2022</Text>
              </View>
            </View>
          </View>
          <View style={styles.circletck}>
            {/* <CheckCircle /> */}
            <Text style={styles.circletcktext}>- $ 150.00</Text>
          </View>
        </View>

        <View style={[styles.card_container, styles.car_container_bgGreen]}>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.circle_bank}>
              <Starbucks />
            </View>
            <View>
              <Text style={[styles.bankLink, styles.circletcktext_white]}>
                Transfer
              </Text>
              <View style={styles.othertext_content}>
                <Text
                  style={[
                    styles.othertext_contents,
                    styles.circletcktext_white,
                  ]}>
                  Yesterday
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.circletck}>
            {/* <CheckCircle /> */}
            <Text style={[styles.circletcktext, styles.circletcktext_white]}>
              - $ 85.00
            </Text>
          </View>
        </View>

        <View style={styles.card_container}>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.circle_bank}>
              <Starbucks />
            </View>
            <View>
              <Text style={styles.bankLink}>Youtube</Text>
              <View style={styles.othertext_content}>
                <Text style={styles.othertext_contents}>Jan 16, 2022</Text>
              </View>
            </View>
          </View>
          <View style={styles.circletck}>
            {/* <CheckCircle /> */}
            <Text style={styles.circletcktext}>- $ 11.99</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default StaticsScreen;

function useStyles() {
  const {width, height} = useWindowDimensions();
  // console.log()
  return StyleSheet.create({
    text1: {
      color: '#222222',
      fontFamily: 'InterSemiBold',
      fontSize: 18,
    },
    staticContainer: {
      // flex:1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 84,
      marginHorizontal: 24,
      backgroundColor: 'red',
    },
    topspenddContainer: {
      // flex:1
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 22,
      marginTop: 60,
    },
    card_container: {
      backgroundColor: '#fafafa',
      flexDirection: 'row',

      // padding:10,
      width: width > 400 ? 374 : '90%',
      padding: width > 400 ? 10 : '1%',
      borderRadius: width > 400 ? 12 : 12,
      marginHorizontal: width > 400 ? 20 : '5%',
      justifyContent: width > 400 ? 'space-between' : 'space-between',
      alignItems: width > 400 ? 'center' : 'center',
      marginTop: 15,
      // backgroundColor:'red'
    },
    car_container_bgGreen: {
      backgroundColor: '#29756F',
      shadowColor: '#29756F',

      elevation: 24,
    },

    papacontainer: {
      // backgroundColor: '#29756F',
    },

    car_container_bgGray: {
      backgroundColor: '#fafafa',
    },
    circle_bank: {
      width: width > 400 ? 50 : 50,

      // backgroundColor: 'red',
      borderRadius: 8,

      padding: 10,
      marginRight: width > 400 ? 9 : 9,
    },
    bankLink: {
      color: '#000000',
      fontFamily: 'InterMedium',
      fontSize: width > 400 ? 16 : 14,
      // backgroundColor: 'yellow',
      marginRight: width > 400 ? 136 : 1,
      // alignItems:"center",
    },
    othertext_contents: {
      color: '#666666',
      fontSize: 13,
      fontFamily: 'InterRegular',
      // marginRight: 50,
      marginTop: 4,
      fontSize: width > 400 ? 13 : 8,
      marginRight: width > 400 ? 50 : 1,
      // backgroundColor: 'yellow',
    },
    circletck: {
      marginRight: width > 400 ? 20 : 10,
    },
    circletcktext: {
      fontSize: width > 400 ? 18 : 12,

      fontFamily: 'InterSemiBold',
      color: '#f95b51',
    },
    circletcktext_white: {
      color: 'white',
    },
  });
}
