import { StyleSheet, Text, View,ImageBackground,Image } from 'react-native'
import React from 'react'
import HomeBackground from '../../assets/Images/Home_background.png'
import circleGroup from '../../assets/Images/circle_group.png'

const ProfileScreen = () => {
  return (
    <View>
      
      <ImageBackground style={styles.imageBackgrounds} source={HomeBackground}>
        <Image style={styles.CircleBackgrounds} source={circleGroup}/>
        <View>
            <Image/>
            <Text style={styles.textProfile}>Profile</Text>
            <Image/>
        </View>
      </ImageBackground>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
    imageBackgrounds: {
        width: 414,
        height: 287,
        backgroundColor:'red',
      },
      CircleBackgrounds:{
        position:'absolute',
        // width: 414,
        // height: 287,
        // backgroundColor:'yellow'
      },
      textProfile:{
        marginTop:84,
      }
})