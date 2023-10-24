import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Pressable,
  useWindowDimensions,
} from 'react-native';

const Butoon = ({navigation}) => {
  const styles = useStyles();
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate('TabNavigation')}>
      <View style={styles.gradient}>
        <Pressable>
          <Text style={styles.buttonText}>Click Me</Text>
        </Pressable>
      </View>
    </TouchableOpacity>
  );
};

export default Butoon;

const styles = StyleSheet.create({});

function useStyles() {
  const {width, height} = useWindowDimensions();
  return StyleSheet.create({
    button: {
      borderRadius: 40,
      overflow: 'hidden',
      backgroundColor: 'red',
      height: width > 400 ? 64 : 45,
      width: width > 400 ? 'auto' : 'auto',
      marginTop: width > 400 ? 26 : 10,
      backgroundColor: '#2F7E79',
    },
    gradient: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
      color: 'white',
      fontWeight: '600',
      textAlign: 'center',
      lineHeight: 38,
      fontSize: width > 400 ? 18 : 14,
    },
  });
}
