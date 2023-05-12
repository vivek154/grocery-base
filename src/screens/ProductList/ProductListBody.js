import { StyleSheet, Text, View,ScrollView,Pressable} from 'react-native'
import React,{useState,useEffect} from 'react'
import { arr } from './product_list_data'
import PageHeadBar from '../PageHeadBar/PageHeadBar'
import BottomNavBar from '../BottomNavBar/BottomNavBar'
import ProductCard from '../ProductCard/ProductCard'
import FiterIcon from "../../svg/FilterIcon.svg"
import ArrowDownIcon from "../../svg/downArrow.svg"
import { useSelector } from 'react-redux'


const ProductListBody = (props) => {
  const {navigation,refRBSheet,products}=props

  return (
<>
    <PageHeadBar title="Product List" navigation={navigation}></PageHeadBar> 
    <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:20,marginVertical:0,}}>
        <View></View>
        <CustomButton1 onPress={()=>{refRBSheet.current.open()}}></CustomButton1>
    </View>
    <ScrollView style={{backgroundColor:"white",marginVertical:4}}>
      <View style={{flex:1,paddingBottom:60,flexDirection:"row",flexWrap:"wrap",justifyContent:"center",columnGap:10,rowGap:10,paddingTop:10}}>
      
        {
            (products.length > 0) && products.map((item)=>(

                <View key={item.id} >
                  <ProductCard item={item} navigation={navigation}></ProductCard>
                </View>
            ))
        }
      </View> 
    </ScrollView>
    
    <BottomNavBar navigation={navigation}></BottomNavBar>
  </>
  )
}

export default ProductListBody

const styles = StyleSheet.create({})

const CustomButton1=({onPress})=>{

    return(
        <Pressable style={{backgroundColor:"#ff5403",flexDirection:"row",justifyContent:"center",gap:10
        ,height:35,borderRadius:30,width:"45%",alignItems:"center"}}  onPress={onPress}>
            <FiterIcon></FiterIcon>
            <Text style={{color:"white"}}>Filter</Text>
        </Pressable>
    )
}

const CustomButton2=()=>{

    return(
        <Pressable style={{backgroundColor:"white",flexDirection:"row",justifyContent:"center",gap:10
        ,height:35,borderWidth:1,borderRadius:30,width:"45%",alignItems:"center"}}>
            <Text style={{color:"#000"}}>Sort By</Text>
            <ArrowDownIcon></ArrowDownIcon>
        </Pressable>
    )
}