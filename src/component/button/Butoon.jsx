import React from 'react';
import {TouchableOpacity,View, Text, StyleSheet,Pressable,useWindowDimensions,
  Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



const Butoon = ({navigation}) => {
  const styles = useStyles();
  return (
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TabNavigation')}>
      <View
        
        style={styles.gradient}>
       <Pressable >
          <Text style={styles.buttonText}>Click Me</Text>
        </Pressable>
      </View>
    </TouchableOpacity>
  );
};



export default Butoon;



const styles = StyleSheet.create({

});


function useStyles() {
  const {width, height} = useWindowDimensions();
  // console.log()
  return StyleSheet.create({
    
  
      // marginTop: width > 400 ? -90 : -40,
   
      button: {
       
        borderRadius: 40,
        overflow: 'hidden',
        backgroundColor:'red',
        height: width > 400 ? 64 : 45,
        width: width > 400 ? "auto" : "auto",
        marginTop: width > 400 ? 26 : 10,
        backgroundColor:'#2F7E79'
       
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
        // fontSize: 18,
        fontWeight: '600',
        textAlign: 'center',
        lineHeight: 38,
        fontSize: width > 400 ? 18 : 14,
      },
      

  });
}