/* eslint-disable prettier/prettier */

import { View,ScrollView, Button ,Text, StyleSheet} from "react-native"
import { category } from "./Arrays.js";
import BottomNavBar from "../BottomNavBar/BottomNavBar.js";
import Categories from "./Categories";
import PageHeadBar from "../PageHeadBar/PageHeadBar.js";
//import Offers from "./Offers";


const MainCategory=(props)=>

{
    const {navigation}=props

    return (
        <>
        <PageHeadBar title="Categories" navigation={navigation}></PageHeadBar>
        <ScrollView >
           <View style={{flex:1, flexDirection: "row", marginBottom:50, flexWrap: "wrap",columnGap:10,rowGap:10,justifyContent:"center",padding:20}} >
        {
            category.map((item,index)=>
            {
                return (
                
                      <Categories item={item} key={index} navigation={navigation}></Categories>
                     
                )
            })
           }
     
      </View>
        </ScrollView>
        <View >
            <BottomNavBar navigation={navigation}></BottomNavBar>
        </View>
        </> 
    )
}



export default  MainCategory;