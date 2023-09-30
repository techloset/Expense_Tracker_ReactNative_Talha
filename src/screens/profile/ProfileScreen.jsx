import {StyleSheet, Text, View, ImageBackground, Image} from 'react-native';
import React from 'react';
import HomeBackground from '../../assets/Images/Home_background.png';
import circleGroup from '../../assets/Images/circle_group.png';
import notification from '../../assets/Images/bell-icon.png';
import LessThan from '../../assets/Images/lessThan.png';
import women from '../../assets/Images/Woman_1.png';
import invite from '../../assets/Images/invite.png';
import login from '../../assets/Images/login.png';
import messageCenter from '../../assets/Images/messageCenter.png';
import userProfile from '../../assets/Images/userProfile.png';
import dataPrivacy from '../../assets/Images/dataPrivacy.png';
import accountInfo from '../../assets/Images/accountInfo.png';

const ProfileScreen = () => {
  return (
    <View style={{width: 414, height: 896, backgroundColor: '#ffffff'}}>
      <ImageBackground style={styles.imageBackgrounds} source={HomeBackground}>
        <Image style={styles.CircleBackgrounds} source={circleGroup} />
        <View style={styles.profile_images_container}>
          <Image
            style={{marginTop: 81, marginLeft: 24, marginRight: 127}}
            source={LessThan}
          />
          <Text style={styles.textProfile}>Profile</Text>
          <View style={styles.image_container}>
            <Image style={{}} source={notification} />
          </View>
        </View>
        <View style={styles.avtar_container}>
          <View style={styles.avtar}>
            <Image style={styles.woman} source={women} />
          </View>
          <Text style={styles.user_Name}>Enjelin Morgeana</Text>
          <Text style={styles.email_address}>@enjelin_morgeana</Text>
        </View>
      </ImageBackground>

      <View style={styles.mainContainer}>
        <View style={styles.parentContainer}>
          <View style={[styles.allImage, styles.inviteImage]}>
            <Image source={invite} />
          </View>
          <Text style={styles.alltext}>Invite Friends</Text>
        </View>
        <View style={styles.bordrcontainer}>
          <View style={styles.borderView}></View>
        </View>
        <View style={styles.parentContainer}>
          <View style={styles.allImage}>
            <Image source={accountInfo} />
          </View>
          <Text style={styles.alltext}>Account Info</Text>
        </View>
        <View style={[styles.parentContainer,styles.otherInfo]}>
          <View style={styles.allImage}>
            <Image source={userProfile} />
          </View>
          <Text style={styles.alltext}>Personal Profile</Text>
        </View>
        <View style={[styles.parentContainer,styles.otherInfo]}>
          <View style={styles.allImage}>
            <Image source={messageCenter} />
          </View>
          <Text style={styles.alltext}>Message Center</Text>
        </View>
        <View style={[styles.parentContainer,styles.otherInfo]}>
          <View style={styles.allImage}>
            <Image source={login} />
          </View>
          <Text style={styles.alltext}>Login and Security</Text>
        </View>
        <View style={[styles.parentContainer,styles.otherInfo]}>
          <View style={styles.allImage}>
            <Image source={dataPrivacy} />
          </View>
          <Text style={styles.alltext}>Data and Privacy</Text>
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  imageBackgrounds: {
    width: 414,
    height: 287,
    // backgroundColor: 'red',
  },
  CircleBackgrounds: {
    position: 'absolute',
    // width: 414,
    // height: 287,
    // backgroundColor:'yellow'
  },
  textProfile: {
    marginTop: 84,
    color: '#ffffff',
    fontFamily: 'InterSemiBold',
    fontSize: 18,
    fontWeight: '600',
    marginRight: 114,
  },
  profile_images_container: {
    flexDirection: 'row',
  },
  image_container: {
    width: 40,
    height: 40,
    backgroundColor: '#ffffff0f',
    padding: 8.33,
    borderRadius: 6.67,
    gap: 8.33,
    marginTop: 78,
    marginRight: 24,
  },
  avtar_container: {
    justifyContent: 'center',
    // alignContent:'center',
    alignItems: 'center',
    marginTop: 105,
  },
  avtar: {
    height: 120,
    width: 120,
    backgroundColor: 'white',
    // marginTop:105,
    borderRadius: 65,
    // flexDirection:'row',
    //
    // marginHorizontal:'auto'
    marginHorizontal: 147,
    // elevation: -1,
    overflow: 'hidden',
  },
  woman: {
    // position:'absolute',
    // elevation: -1,
  },
  user_Name: {
    fontFamily: 'InterSemiBold',
    color: '#222222',
    fontSize: 20,
    fontWeight: '600',
    marginTop: 20,
  },
  email_address: {
    fontFamily: 'InterSemiBold',
    fontSize: 14,
    fontWeight: '600',
    color: '#438883',
    marginTop: 5,
  },
  parentContainer: {
    flexDirection: 'row',
    // justifyContent:'center',
    alignItems: 'center',
    marginLeft: 25,
    // marginRight:20,
  },
  allImage: {
    width: 50,
    // height: 50,
    marginRight: 20,
    justifyContent: 'center',
    // backgroundColor: '#f0f6f5',
    alignItems: 'center',
  },
  inviteImage: {
    width: 50,
    height: 50,
    backgroundColor: '#f0f6f5',
    borderRadius: 50,
  },
  alltext: {
    color: '#000000',
    fontSize: 16,
    fontFamily: 'InterMedium',
    fontWeight: '600',
  },
  mainContainer: {
    // backgroundColor: 'red',
    marginTop: 144,
  },
  bordrcontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical:15,
  },
  borderView: {
    borderBottomWidth: 2,
    width: '88%',
    borderColor:'#EEEEEE'
  },
  otherInfo:{
    marginTop:30,
  }
});
