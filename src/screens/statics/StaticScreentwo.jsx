import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  useWindowDimensions,
  TextInput,
  ImageBackground,
} from 'react-native';
import {useState} from 'react';
import React from 'react';
import Ellipse from '../../assets/Images/Ellipse.svg';
import Notification from '../../assets/Images/notification.svg';
import LessThan from '../../assets/Images/left.svg';
import {Dropdown} from 'react-native-element-dropdown';
import Netflic from 'react-native-vector-icons/Fontisto';
import Googlee from 'react-native-vector-icons/AntDesign';
import Facebooke from 'react-native-vector-icons/EvilIcons';
import Yotubee from 'react-native-vector-icons/Entypo';
import DatePicker from 'react-native-datepicker';
import PlussSign from '../../assets/Images/plusCircle.png';
import {COLOR, FONT_FAMILY} from '../../lib/styles/GlobalStyles';
import Home_background from '../../assets/Images/Home_background.png';

const data = [
  {label: 'Netflix ', value: '1'},
  {label: 'Youtube Ads', value: '2'},
  {label: 'Google Ads', value: '3'},
  {label: 'Facbook Ads', value: '4'},
];

const StaticScreentwo = ({navigation}) => {
  const [date, setDate] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChange = newDate => {
    setDate(newDate);
    setShowDatePicker(false);
  };

  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };

  const [inputValue, setInputValue] = useState('');

  const clearInput = () => {
    setInputValue('');
  };

  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const getImageForSelection = selectedValue => {
    switch (selectedValue) {
      case '3':
        return (
          <Googlee
            style={styles.icon}
            color={isFocus ? COLOR.black : COLOR.darkRed}
            name="google"
            size={20}
          />
        );
      case '4':
        return (
          <Facebooke
            style={styles.icon}
            color={isFocus ? COLOR.black : COLOR.darkRed}
            name="sc-facebook"
            size={25}
          />
        );
      case '2':
        return (
          <Yotubee
            style={styles.icon}
            color={isFocus ? COLOR.black : COLOR.darkRed}
            name="youtube"
            size={20}
          />
        );
      case '1':
        return (
          <Netflic
            style={styles.icon}
            color={isFocus ? COLOR.black : COLOR.darkRed}
            name="netflix"
            size={20}
          />
        );

      default:
        return null;
    }
  };

  const styles = useStyles();
  return (
    <View>
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
            <TouchableOpacity
              onPress={() => navigation.navigate('StaticsScreen')}>
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
            Bill Payment
          </Text>
          <Notification />
        </View>
      </ImageBackground>

      <View style={styles.container}>
        <View style={styles.innermain}>
          <Text style={[styles.stylennamee, styles.maincc]}>NAME</Text>
          <Dropdown
            style={[styles.dropdown, isFocus && {borderColor: COLOR.blue}]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? 'Netflix' : '...'}
            searchPlaceholder="Search..."
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setValue(item.value);
              setIsFocus(false);
            }}
            renderLeftIcon={() => getImageForSelection(value)}
          />

          <Text style={[styles.stylennamee, styles.otherText]}>Amount</Text>
          <View style={styles.inpit2}>
            <TextInput
              placeholder="$48.00"
              value={inputValue}
              onChangeText={text => setInputValue(text)}
            />

            <TouchableOpacity onPress={clearInput} style={styles.clearButton}>
              <Text>Clear</Text>
            </TouchableOpacity>
          </View>

          <Text style={[styles.stylennamee, styles.otherText]}>Date</Text>
          <View style={styles.calender}>
            <TouchableOpacity
              onPress={toggleDatePicker}
              style={styles.datePickerContainer}>
              <Text style={styles.dateText}>{date || 'Select date'}</Text>
            </TouchableOpacity>
            {showDatePicker && (
              <DatePicker
                style={styles.datePicker}
                date={date}
                mode="date"
                format="MM/DD/YYYY"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                onDateChange={handleDateChange}
              />
            )}
          </View>
          <Text style={[styles.stylennamee, styles.otherText]}>Invoice</Text>
          <View style={styles.dashbaordd}>
            <Image source={PlussSign} />
            <Text style={styles.addinvoice}>Add Invoice</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default StaticScreentwo;

function useStyles() {
  const {width, height} = useWindowDimensions();
  return StyleSheet.create({
    imageBackground: {
      height: width > 400 ? 287 : 287,
    },
    container: {
      position: 'absolute',
      backgroundColor: COLOR.white,
      width: '85%',
      marginTop: 165,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      marginLeft: 28,
      height: '245%',
    },

    billText: {
      color: COLOR.white,
      fontSize: width > 400 ? 18 : 14,
      fontFamily: FONT_FAMILY.interSemiBold,
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

    dropdown: {
      borderColor: COLOR.gray,
      borderWidth: 0.5,
      borderRadius: 8,
      padding: 15,
    },
    icon: {
      marginRight: 15,
    },
    label: {
      position: 'absolute',
      backgroundColor: COLOR.white,
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
    inpit2: {
      marginTop: 10,
      borderColor: COLOR.green,
      borderWidth: 1.5,
      borderRadius: 5,
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 12,
      justifyContent: 'space-between',
    },

    calender: {
      flexDirection: 'row',
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: COLOR.SecondaryGrey,
      padding: 15,
    },
    dashbaordd: {
      borderWidth: 1,
      borderStyle: 'dashed',
      borderColor: COLOR.black,
      flexDirection: 'row',
      padding: 15,
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10,
    },
    stylennamee: {
      fontSize: 12,
      fontFamily: FONT_FAMILY.interMedium,
      color: COLOR.SecondaryGrey,
    },
    maincc: {
      marginTop: 30,
      marginBottom: 5,
    },
    otherText: {
      marginTop: 24,
      marginBottom: 5,
    },
    innermain: {
      marginHorizontal: 20,
    },
    addinvoice: {
      fontSize: 14,
      color: COLOR.SecondaryGrey,
      fontFamily: FONT_FAMILY.interMedium,
    },
  });
}
