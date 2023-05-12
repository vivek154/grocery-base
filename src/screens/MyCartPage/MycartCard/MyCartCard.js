
import { StyleSheet, Text, View, Image, Pressable,ActivityIndicator} from 'react-native'
import React, { useEffect, useState } from 'react'
import QuantityButtons from '../../QuantityButtons/QuantityButtons'
import { deletemycart, getmycart, postmycart, updateQuantity } from '../../../api/api'
import { useDispatch, useSelector } from 'react-redux'
import { AUTH_TYPE } from '../../../redux/action/authAction'
import { Store } from '../../../redux/Store'

const MyCartCard = (props) => {
  const { userData } = useSelector(state => state?.auth)
  const { myCart } = useSelector(state => state?.auth)
  const state = useSelector(state => state)
  const dispatch = useDispatch();

  //console.log("userData", userData)
  let userid = {
    id: userData.id
  }
  const SVGIcon = props.SVGIcon
  const { item, data,setTotalPrice} = props;
  const { id, userId, name, price, imageUrl, productId,quantity } = item;

  const [quantityLoader, setQuantityLoader] = useState(false);
  const [deleteIndicator,setDeleteIndicator]=useState(false)
 
  useEffect(()=>{

    setTotalPrice((prevValue)=> (prevValue+ (quantity*price)))
    
  },[])
  useEffect(()=>{
    setQuantityLoader(false)
  },[quantity])
  const decrement =async () => {
    if (quantity > 1) {
      setQuantityLoader(true)
      let payload={productId:productId,userId:userId,action:-1}
      await updateQuantity(payload)
      await props.makeApiRequest(); 
      setTotalPrice((prevValue)=> (prevValue-(price)))
    }
  }
  const increment = async() => {
    setQuantityLoader(true)
    let payload={productId:productId,userId:userId,action:1}
    await updateQuantity(payload)
    await props.makeApiRequest();
    setTotalPrice((prevValue)=> (prevValue+(price)))
  }
    const handledelete = async(productId) => {
    setDeleteIndicator(true)
    const response = await deletemycart(productId, userId)
    console.log("delete response",response.data)
    if(response.data==1){
      console.log("deleted")
    }
    props.makeApiRequest();
    setDeleteIndicator(false)
    setTotalPrice((prevValue)=>prevValue-(quantity*price))
  }



  return (
    <View style={styles.container}>

      <View style={{ flexDirection: "row", gap: 20 }}>
        <View>
          <Image source={{ uri: imageUrl }} style={styles.image}></Image>
        </View>

        <View style={styles.middleBox}>
          <Text style={{ fontWeight: "bold", color: "black", fontSize: 15 }}>{name}</Text>
          <Text style={styles.text}>Price :{price}<Text style={{ color: "#656565", width: 70 }}>
          </Text>{ }</Text>
          {!quantityLoader &&
            <QuantityButtons count={quantity} increment={increment} decrement={decrement} ></QuantityButtons>
          }
          {
            quantityLoader &&
            <ActivityIndicator style={{alignSelf:"center"}}></ActivityIndicator>
          }
          
        </View>
      </View>
      <View style={styles.endRightBox}>
        {
          ! deleteIndicator &&
        <Pressable onPress={() => handledelete(productId)} style={styles.quantityContainer}>
          <SVGIcon></SVGIcon>
        </Pressable>
        }
        {
          deleteIndicator &&
          <ActivityIndicator></ActivityIndicator>
        }
      </View>
    </View>
  )
}

export default MyCartCard

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center",
    backgroundColor: "#ffffff",
    width: "90%",
    padding: 10,
    elevation: 5,
    borderRadius: 10,
    marginVertical: 10
  },
  image: {
    width: 101,
    height: 88,
    resizeMode: "contain",
    
    

  },
  middleBox: {
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "flex-start",
    flexWrap: "wrap",
    marginHorizontal: 10,
    width: 120,

  },
  endRightBox: {
    justifyContent: "center",
    alignItems: "center",

  },
  quantityContainer: {
    minHeight: 40,
    minWidth: 40,
    backgroundColor: "grey",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E5E5E5",
  },
  text: {
    color: "black",
    fontWeight: "bold"
  }
})