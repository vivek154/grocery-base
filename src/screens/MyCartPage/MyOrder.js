import { View, Text, Pressable, StyleSheet, Image } from 'react-native';
import PageHeader from '../PageHeader/PageHeader';
import MyCartCard from './MycartCard/MyCartCard';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import DeliveryCard from '../DeliveryPage/DeliveryCard';
const MyOrder = ({ navigation }) => {
    return (

        <>
             
            <View style={styles.container}>
        <Image source={require("../../images/apple.jpg")} style={styles.image}></Image>

        <View style={{ width: "60%", flexDirection: "row" }}>
          <View style={styles.middleBox}>
           
              <Text style={{ fontWeight: "bold", color: "black", fontSize: 15 }}>Fresh Cabbage</Text>
            <Text style={{ color: "black" }}>Quantity</Text>
            <Text style={{color:"black"}}>Total Price</Text>
            </View>

          
            {/*<Text style={{ color: "black" }}>$10</Text>*/}
        

        </View>
      </View>
        </>
    )
}

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
      /*stifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "wrap",
      marginHorizontal: 10,
      gap: 5*/

      flexDirection: "column",
      justifyContent: "space-around",
     // alignItems: "flex-start"
      flexWrap: "wrap",
      marginHorizontal: 23,
      width: 120,
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
export default MyOrder
