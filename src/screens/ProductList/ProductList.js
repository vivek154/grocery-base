import { StyleSheet, Text, View,Button,TouchableOpacity} from 'react-native'
import React,{ useRef ,useState,useEffect} from 'react'
const array=[1,2,3,4,5,6,7,8,9,10,11,12]
import RBSheet from 'react-native-raw-bottom-sheet';
import Mybutton from '../Mybutton';
import ProductListBody from './ProductListBody';
import { getAllCategories, getAllProducts } from '../../api/api';
import FilterButton from './FilterButton';
import { useSelector } from 'react-redux';
const ProductList = ({navigation}) => {
    const refRBSheet = useRef();
    const [products,setProducts]= useState([]);
    const [categories,setCategories]=useState([])
    const [filters,setFilters]=useState([])

    const requestProducts = async () =>{
      try{
        let response = await getAllProducts()
        if(response && response.data){
          setProducts(response.data)
        }}
      catch(err){
        console.log(err)
      }}
    
    const requestCategories = async()=>{
      try{
        let response = await getAllCategories()
        if(response && response.data){
          setCategories(response.data)
        }} 
      catch(err){
        console.log(err)
      }} 
    
    const handleFilterBtnPress= async(item)=>{
      await requestProducts()
      if(filters.indexOf(item.id) == -1) {
        setFilters((prevState)=> [...prevState,item.id])
      }
      else{
        let index = filters.indexOf(item.id)
        setFilters((prevState)=>{
          return [...prevState.slice(0,index),...prevState.slice(index+1)]
        })}}
    
    const applyFilters=()=>{
       if(filters.length > 0){
        let  filteredProducts= products.filter((product)=>{
          
          return filters.indexOf(product.categoryId) !== -1
        })

        setProducts(filteredProducts)
      }}

    const clearFilters=()=>{
      setFilters([]);
      requestProducts()
    }  
        
    useEffect(()=>{
      console.log("product list useEffect called");
      requestProducts()
      requestCategories()

    },[])


  return (

    <View
      style={{
        flex: 1,
        backgroundColor: "#fff"
      }}
    >
      <ProductListBody refRBSheet={refRBSheet} navigation={navigation} products={products}></ProductListBody>
     
     
      <RBSheet
        height={400}
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        customStyles={{
          wrapper: {
            backgroundColor: "transparent"
          },
          draggableIcon: {
            backgroundColor: "#000"
          }
        }}
      >
          <View style={styles.contentContainer}>
            <Text style={{color:"black",fontWeight:"bold"}}>Search Filter</Text>
            
            <View style={styles.btnContainer}>
            {
              categories.map((item,index)=>{
                return (
                  <FilterButton
                    key={index} 
                    item={item}
                    filters={filters} 
                    onPress={() => handleFilterBtnPress(item)}
                  >

                  </FilterButton>
                )
                
              })
            }
            </View>

            <View style={styles.bigBtnContainer}>

              <Mybutton 
              btnTxt="Apply Filter" 
              txtColor="#ffffff" 
              width={250}
              myButton={styles.bigButtons}
              onPress={applyFilters}></Mybutton>

              <Mybutton 
              btnTxt="Clear All" 
              txtColor="#ffffff" 
              width={250} 
              myButton={styles.bigButtons}
              onPress={clearFilters}
              ></Mybutton>
            </View>
            
          </View>
      </RBSheet>
    </View>

  )
}

export default ProductList

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'grey',
    height:"100%"
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  myButton:{
    backgroundColor:"#C4C4C4",
    borderColor:"#000000",
    fontWeight:"bold",
    borderRadius:20,
    padding:10,
    width:"30%",
},
btnContainer:{
  flexDirection:"row",
  flexWrap:"wrap",
  columnGap:10,
  rowGap:10,
  justifyContent:"center",
  alignItems:"center",
  marginTop:10
},
bigBtnContainer:{
  width:"100%",
  marginTop:10,
  flexDirection:"column",
  gap:5,
  paddingVertical:5,
  justifyContent:"center",
  alignItems:"center"
},
bigButtons:{
  backgroundColor:"#FF5403",
  borderColor:"#000000",
  fontWeight:"bold",
  fontSize:15,
  borderRadius:20,
  padding:10,
  width:"70%",
}
})