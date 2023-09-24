import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Butoon = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <LinearGradient
        colors={['#68aea9', '#3e8681']}
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 0.5}}
        style={styles.gradient}>
        <Text style={styles.buttonText}>Click Me</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop:5,
    width: 358,
    height: 64,
    backgroundColor:'red',
    borderRadius: 40,
    overflow: 'hidden',
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    lineHeight: 38,
  },
});

export default Butoon;
