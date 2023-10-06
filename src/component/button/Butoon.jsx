import React from 'react';
import {TouchableOpacity, Text, StyleSheet,Pressable} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


const Butoon = ({navigation}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TabNavigation')}>
      <LinearGradient
        colors={['#68aea9', '#3e8681']}
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 0.5}}
        style={styles.gradient}>
       <Pressable >
          <Text style={styles.buttonText}>Click Me</Text>
        </Pressable>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop:26,
    width: 358,
    height: 64,
    // backgroundColor:'red',
    borderRadius: 40,
    overflow: 'hidden',
    // backgroundColor:'red',
   
  },
  gradient: {
    // backgroundColor:'red',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
},
buttonText: {
      // backgroundColor:'red',
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    lineHeight: 38,
    
  },
});

export default Butoon;
