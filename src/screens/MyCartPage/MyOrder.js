import {View, Text, Pressable, StyleSheet, Image, ScrollView} from 'react-native';
import PageHeader from '../PageHeader/PageHeader';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import DeliveryCard from '../DeliveryPage/DeliveryCard';
import {useEffect, useState} from 'react';
import BottomNavBar from '../BottomNavBar/BottomNavBar';
import { getmycart } from '../../api/api';
import { useSelector } from 'react-redux';

const MyOrder = ({navigation}) => {
  const [myOrders,setMyOrders]=useState([])
  const userId = useSelector(state => state?.auth.userData.id);
  const fetchMyCartData =async () => {
    
    let response = await getmycart(userId);
    
    if(response.data){
      
      setMyOrders(response.data)
    }
  };
  useEffect(() => {
    fetchMyCartData();
  },[]);
  return (
    <View>
      <View style={stylesMyOrder.headerContainer}>
        <PageHeader
          text="My Orders"
          navigation={navigation}
          navigateTo={'MyProfile'}></PageHeader>
      </View>
      <View style={stylesMyOrder.bodyContainer}>
        <ScrollView>
          {
            myOrders.map((order)=>{
             return <MyOrderCard item={order}></MyOrderCard>
            })
          }
          
        </ScrollView>  
      </View>
      <View style={stylesMyOrder.footerContainer}>
        <BottomNavBar navigation={navigation}></BottomNavBar>
      </View>
    </View>
  );
};

const stylesMyOrder = StyleSheet.create({
  headerContainer:{
    height:hp("10%")
  },
  bodyContainer:{
    height:hp("83%")
  },
  footerContainer:{
    height:hp("7%")
  }
})

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignSelf: 'center',
    backgroundColor: '#ffffff',
    minHeight: '15%',
    padding: 10,
    elevation: 5,
    borderRadius: 10,
    maxwidth: '90%',
    minWidth: '70%',

    marginVertical: 10,
  },
  image: {
    width: 101,
    height: 101,
    resizeMode: 'contain',
  },
  middleBox: {
    /*stifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "wrap",
      marginHorizontal: 10,
      gap: 5*/

    flexDirection: 'column',
    justifyContent: 'space-around',
    // alignItems: "flex-start"
    flexWrap: 'wrap',
    marginHorizontal: 23,
    width: 120,
  },
  endRightBox: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  quantityContainer: {
    minHeight: 30,
    minWidth: 30,
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E5E5E5',
  },
});
export default MyOrder;

const MyOrderCard = (props) => {
  const{item}=props
  const totalPrice = useSelector((state)=> state.auth.totalPrice)
  const { id, userId, name, price, imageUrl, productId,quantity } = item;
  return (
    <>
      <View style={styles.container}>
        <Image
          source={{uri:imageUrl}}
          style={styles.image}></Image>

        <View style={{width: '60%', flexDirection: 'row'}}>
          <View style={styles.middleBox}>
            <Text style={{fontWeight: 'bold', color: 'black', fontSize: 15}}>
              {name}
            </Text>
            <Text style={{color: 'black'}}>Quantity : {quantity}</Text>
            <Text style={{color: 'black'}}>Sum Total : {quantity*price}</Text>
          </View>

          {/*<Text style={{ color: "black" }}>$10</Text>*/}
        </View>
      </View>
    </>
  );
};
