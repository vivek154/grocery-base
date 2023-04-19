import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ProfileCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profilePicContainer}></View>
      <View style={styles.middleBox}>
        <Text style={{color:"black",fontWeight:"bold",fontSize:18}}>John Doe</Text>
        <Text>john@gmail.com</Text>
        <Text>+1123456789</Text>
      </View>
      <Text style={{color:"#ff5403",alignSelf:"flex-start",marginTop:10}}>Edit</Text>
    </View>
  )
}

export default ProfileCard

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginHorizontal:30,
        marginVertical:10,
    },
    profilePicContainer:{
        borderWidth:4,
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