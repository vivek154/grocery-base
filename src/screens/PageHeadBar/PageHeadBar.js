import { StyleSheet, Text, View,Image,Pressable} from 'react-native'
import React from 'react'
import SearchIconSVG from "../../svg/Search.svg"
import BellIconSVG from "../../svg/BellIcon.svg"
import BasketIconSVG from "../../svg/BasketIcon.svg"
import { useSelector } from 'react-redux'
import { heightPercentageToDP } from 'react-native-responsive-screen'
const PageHeadBar = ({title,navigation}) => {

  function showSearchPage(){
    navigation.navigate("SearchPage")
  }
  function showMyCart(){
    navigation.navigate("MyCartPage")
  }
  function showMyProfile(){
    navigation.navigate("MyProfile")
  }
  function showNotificationPage(){
    navigation.navigate("MainNotification")
  }
  const cart=useSelector((state)=>state.auth.myCart);
  const count=cart?.length?cart.length:0
  return (
    <View style={styles.container}>
      <Text style={{fontSize:23,fontWeight:"bold",color:"black"}}>{title}</Text>
      <View style={styles.iconsContainer}>
        <Pressable onPress={showSearchPage}>
            <SearchIconSVG></SearchIconSVG>
        </Pressable>
        <Pressable onPress={showNotificationPage}>
            <BellIconSVG></BellIconSVG>
        </Pressable>
        
        <Pressable onPress={showMyCart}>
          <View style={{width:"10%"}}>
            <BasketIconSVG></BasketIconSVG>
            <View style={{width:18,height:18,borderRadius:9,backgroundColor:"#ff5403",position:'absolute',left:14,}}>
              <Text style={{alignSelf:'center',color:'white',fontSize:14}}>{count}</Text>
            </View>
            </View>
        </Pressable>
        
        <Pressable onPress={showMyProfile}>
          <Image source={require("../../images/profilePic.png")}></Image>
        </Pressable>
      </View>
    </View>
  )
}

export default PageHeadBar

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        height:heightPercentageToDP("10%"),
        paddingHorizontal:20,
        backgroundColor:"white"
    },
    iconsContainer:{
        flexDirection:"row",
        gap:10,
        alignItems:"center",
        justifyContent:"center"
    }
})