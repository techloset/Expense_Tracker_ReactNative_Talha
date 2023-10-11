import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
  TouchableOpacity
} from 'react-native';
import {useState} from 'react';

import {Dropdown} from 'react-native-element-dropdown';
// import AntDesign from '@expo/vector-icons/AntDesign';

import Download from '../../assets/Images/download.svg';
import LessThanBlack from '../../assets/Images/Lessthanblack.svg';
import Sort from '../../assets/Images/sort.svg';
import Starbucks from '../../assets/Images/starbucks.svg';
import Girl from '../../assets/Images/image7.png';
import Youtube from '../../assets/Images/youtubeIcon.png';

import React from 'react';
import {LineChart} from 'react-native-chart-kit';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

// console.log(windowWidth);
// console.log(windowHeight + ' heelo');

const data = [
  {label: 'Expense', value: '1'},
  {label: 'Income', value: '2'},
];

export const StaticsScreen = ({navigation}) => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
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

      <View style={styles.daysConatiner}>
        <Text>Day</Text>
        <Text>Week</Text>
        <Text>Month</Text>
        <Text>Year</Text>
      </View>

      <View style={[styles.droppdown,styles.ddddd]}>
        <Dropdown
          style={[styles.dropdown, isFocus && {borderColor: 'blue'},styles.width]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          iconStyle={styles.iconStyle}
          data={data}
          maxHeight={300}
          // Width={450}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Expense' : 'Expense'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
        />
      </View>

      <View style={styles.cahrtt}>
        <LineChart
          data={{
            labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
              {
                data: [0, 25, 20, 30, 40, 25, 35],
              },
            ],
          }}
          width={Dimensions.get('window').width} 
          height={220}
          yAxisLabel=""
          yAxisSuffix=""
          chartConfig={{
            backgroundColor: '#ffffff',
            backgroundGradientFrom: '#ffffff',
            backgroundGradientTo: '#ffffff',
            decimalPlaces: 2, 

            color: (opacity = 1) => `rgba(67, 136, 131, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '0',
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
              <Image style={{borderRadius: 50}} source={Girl} />
            </View>
            <View>
            <TouchableOpacity onPress={() => navigation.navigate('StaticScreentwo')}>
              <Text style={[styles.bankLink, styles.circletcktext_white]}>
                Transfer
              </Text>
              </TouchableOpacity>
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
              <Image source={Youtube} />
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
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 81,
      marginHorizontal: 24,
    },
    topspenddContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 22,
      // marginTop: 60,
    },
    card_container: {
      backgroundColor: '#fafafa',
      flexDirection: 'row',

      width: width > 400 ? 374 : '90%',
      padding: width > 400 ? 10 : '1%',
      borderRadius: width > 400 ? 12 : 12,
      marginHorizontal: width > 400 ? 20 : '5%',
      justifyContent: width > 400 ? 'space-between' : 'space-between',
      alignItems: width > 400 ? 'center' : 'center',
      marginTop: 15,
    },
    car_container_bgGreen: {
      backgroundColor: '#29756F',
      shadowColor: '#29756F',

      elevation: 24,
    },
    cahrtt: {
      // marginHorizontal:10
      marginLeft: 10,
      marginRight: 10,
    },
    papacontainer: {
      // backgroundColor: '#29756F',
    },

    car_container_bgGray: {
      backgroundColor: '#fafafa',
    },
    circle_bank: {
      width: width > 400 ? 50 : 50,
      borderRadius: 8,
      padding: 10,
      marginRight: width > 400 ? 9 : 9,
    },
    bankLink: {
      color: '#000000',
      fontFamily: 'InterMedium',
      fontSize: width > 400 ? 16 : 14,

      marginRight: width > 400 ? 136 : 1,
    },
    othertext_contents: {
      color: '#666666',
      fontSize: 13,
      fontFamily: 'InterRegular',

      marginTop: 4,
      fontSize: width > 400 ? 13 : 8,
      marginRight: width > 400 ? 50 : 1,
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
    daysConatiner: {
      flexDirection: 'row',
      marginHorizontal: 32,
      justifyContent: 'space-between',
      marginTop: 40,
    },

    dropdown: {
      height: 50,
      borderColor: 'gray',
      borderWidth: 0.5,
      borderRadius: 8,
      paddingHorizontal: 8,
    },
    icon: {
      marginRight: 5,
    },
    label: {
      position: 'absolute',
      backgroundColor: 'white',
      left: 22,
      top: 8,
      zIndex: 999,
      paddingHorizontal: 8,
      fontSize: 14,
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
    droppdown: {
      padding: 16,
      // backgroundColor: 'red',
      // width:'100%',
      // flex:1
      // alignContent:'flex-end',
      // justifyContent:'center',
      // alignItems:'center'
      // position:'absolute',
      // right:0
      // marginRight:0
    },
    ddddd:{
      // flex:1
      alignItems:"flex-end",
      // width:'38%',
    },
    width:{
      width:'35%'
    }
  });
}
