import { StyleSheet, Text, View, } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Applesvg from '../../svg/Apple.svg'
const ProfileCard = (props) => {
  const {userData,navigation}=props
  const {email,phoneNumber,fullName}=userData
  return (
    <View style={styles.container}>
      <View style={styles.profilePicContainer}>
      <Applesvg></Applesvg>
      </View>
      <View style={styles.middleBox}>
        <Text style={{color:"black",fontWeight:"bold",fontSize:18}}>{fullName?fullName:'N/A'}</Text>
        <Text style={{color:"#000"}}>{email?email:'N/A'}</Text>

        <Text style={{color:"#000"}}>{phoneNumber}</Text>
      </View>

      <Text style={{color:"#ff5403",alignSelf:"flex-start",marginTop:10,fontSize:18}}
      onPress={()=>navigation.navigate("EditProfilePage")}>Edit</Text>
    </View>
  )
}

export default ProfileCard

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
    },
    profilePicContainer:{
        borderWidth:4,
        justifyContent:'center',
        alignItems:'center',
        borderColor:"#FF5403",
        width:100,
        height:100,
        borderRadius:50
    },
    middleBox:{
        flexDirection:"column",
        justifyContent:"flex-start",
        gap:5
    },

})