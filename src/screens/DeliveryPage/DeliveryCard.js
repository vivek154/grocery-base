import { StyleSheet, Text, View, Image, ScrollView, Pressable } from 'react-native'
import React from 'react'
import PageHeader from '../PageHeader/PageHeader'
import Applesvg from '../../svg/Apple.svg';
import { useSelector } from 'react-redux'
const DeliveryCard = ({navigation}) => {
  const address=useSelector((state)=>state.auth.userData.address)
  return (
    <View>
      <View>
        <PageHeader text="Delivery" navigation={navigation} navigateTo={"MyProfile"}></PageHeader>
      </View>

      <Text style={{ color: "black", fontWeight: "bold", marginVertical: 10 ,marginHorizontal:27}}>Where</Text>
      <View style={styles.container}>
        {/* <Image source={require("../../images/apple.jpg")} style={styles.image}></Image> */}
      <Applesvg></Applesvg>
        <View style={{ width: "60%", flexDirection: "row" }}>
          <View style={styles.middleBox}>
            <Text style={{ fontWeight: "bold", color: "black", fontSize: 15 }}>Deliver To</Text>
            <Text style={{ color: "black" }}>{address?address:"N/A"}</Text>
            {/*<Text style={{ color: "black" }}>$10</Text>*/}
          </View>
        </View>
      </View>
    </View>

  )
}

export default DeliveryCard

const styles = StyleSheet.create({

  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignSelf: "center",
    backgroundColor: "#ffffff",
    minHeight: "15%",
    padding: 10,
    elevation: 5,
    borderRadius: 10,
    maxwidth: "90%",
    minWidth: "70%",

    marginVertical: 10
  },
  image: {
    width: 101,
    height: 101,
    resizeMode: "contain"
  },
  middleBox: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    flexWrap: "wrap",
    marginHorizontal: 10,
    gap: 5
  },
  endRightBox: {
    flexDirection: "column",
    justifyContent: "flex-end",

  },
  quantityContainer: {
    minHeight: 30,
    minWidth: 30,
    backgroundColor: "grey",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E5E5E5",
  }
})