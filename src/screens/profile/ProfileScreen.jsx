import {StyleSheet, Text, View, ImageBackground, Image,ScrollView} from 'react-native';
import React from 'react';
import HomeBackground from '../../assets/Images/Home_background.png';
import circleGroup from '../../assets/Images/circle_group.png';
import Notification from '../../assets/Images/notification.svg';
import LessThan from '../../assets/Images/lessThan.png';
import women from '../../assets/Images/Woman_1.png';
import invite from '../../assets/Images/invite.png';
import Login from '../../assets/Images/Login.svg';
import MessageCenter from '../../assets/Images/MessageCenter.svg';
import UserProfile from '../../assets/Images/UserProfile.svg';
import DataPrivacy from '../../assets/Images/DataPrivacy.svg';
import AccountInfo from '../../assets/Images/AccountInfo.svg';
import {COLOR, FONT_FAMILY} from '../../lib/styles/GlobalStyles';

const ProfileScreen = () => {
  return (
    <View style={{height: 896, backgroundColor: COLOR.white}}>
      <ScrollView>
      <ImageBackground style={styles.imageBackgrounds} source={HomeBackground}>
        <Image style={styles.CircleBackgrounds} source={circleGroup} />

        <View style={styles.profile_images_container}>
          <Image source={LessThan} />
          <Text style={styles.textProfile}>Profile</Text>
          <View>
            <Notification />
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
            <AccountInfo />
          </View>
          <Text style={styles.alltext}>Account Info</Text>
        </View>
        <View style={[styles.parentContainer, styles.otherInfo]}>
          <View style={styles.allImage}>
            <UserProfile />
          </View>
          <Text style={styles.alltext}>Personal Profile</Text>
        </View>
        <View style={[styles.parentContainer, styles.otherInfo]}>
          <View style={styles.allImage}>
            <MessageCenter />
          </View>
          <Text style={styles.alltext}>Message Center</Text>
        </View>
        <View style={[styles.parentContainer, styles.otherInfo]}>
          <View style={styles.allImage}>
            <Login />
          </View>
          <Text style={styles.alltext}>Login and Security</Text>
        </View>
        <View style={[styles.parentContainer, styles.otherInfo]}>
          <View style={styles.allImage}>
            <DataPrivacy />
          </View>
          <Text style={styles.alltext}>Data and Privacy</Text>
        </View>
      </View>

        </ScrollView>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  imageBackgrounds: {
    height: 287,
  },
  CircleBackgrounds: {
    position: 'absolute',
  },
  textProfile: {
    color: COLOR.white,
    fontFamily: FONT_FAMILY.interSemiBold,
    fontSize: 18,
    fontWeight: '600',
  },
  profile_images_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 78,
    marginHorizontal: 24,
  },
  avtar_container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 105,
  },
  avtar: {
    height: 120,
    width: 120,
    backgroundColor: COLOR.white,
    borderRadius: 65,

    marginHorizontal: 147,
    overflow: 'hidden',
  },
  user_Name: {
    fontFamily: FONT_FAMILY.interSemiBold,
    color: COLOR.black,
    fontSize: 20,
    fontWeight: '600',
    marginTop: 20,
  },
  email_address: {
    fontFamily: FONT_FAMILY.interSemiBold,
    fontSize: 14,
    fontWeight: '600',
    color: COLOR.green,
    marginTop: 5,
  },
  parentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 25,
  },
  allImage: {
    width: 50,
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inviteImage: {
    width: 50,
    height: 50,
    backgroundColor: COLOR.transImageClr,
    borderRadius: 50,
  },
  alltext: {
    color: COLOR.black,
    fontSize: 16,
    fontFamily: FONT_FAMILY.interMedium,
    fontWeight: '600',
  },
  mainContainer: {
    marginTop: 144,
  },
  bordrcontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 15,
  },
  borderView: {
    borderBottomWidth: 2,
    width: '88%',
    borderColor: COLOR.shadeGray,
  },
  otherInfo: {
    marginTop: 30,
  },
});
