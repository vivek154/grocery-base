import { View ,Text,ScrollView,Pressable} from "react-native"

import Notifications from "./Notifications"
import PageHeader from "../PageHeader/PageHeader"
import PageHeadBar from "../PageHeadBar/PageHeadBar"

const MainNotification=({navigation})=>
{
    const notificationarr=[
        {id:1,name:'fresh apple',text:'this is apple',time:'2hour'},
        {id:2,name:'fresh Pinapple',text:'this is Pinapple',time:'2hour'},
        {id:3,name:'fresh Vegetable',text:'this is Vegetable',time:'2hour'},
        {id:4,name:'fresh Lemon',text:'this is Lemon',time:'2hour'},
        {id:3,name:'fresh Vegetable',text:'this is Vegetable',time:'2hour'},
        {id:4,name:'fresh Lemon',text:'this is Lemon',time:'2hour'},
        {id:3,name:'fresh Vegetable',text:'this is Vegetable',time:'2hour'},
        {id:4,name:'fresh Lemon',text:'this is Lemon',time:'2hour'},
    
    

    ]
    return (
        <>

        <PageHeader text="Notifications" navigation={navigation} navigateTo={"MyProfile"}></PageHeader>
       
       {/*  <ScrollView>
       <View style={{flexDirection:'row',justifyContent:'space-between',margin:10}}>
            <Text style={{marginLeft:18,fontWeight:'bold',color:"black"}}>Today</Text>
            <Text style={{color:"#FF5403"}}>View All</Text>
        </View>
        <View>
        <View style={{rowGap:7,marginBottom:10,}}>
             {
                notificationarr.map((ele,index)=>
                {
                    return (
                        <Notifications ele={ele} key={index}></Notifications>
                    )
                })
             }
        </View>
*
        </View>
        </ScrollView>
         
*/}
<View style={{ flex: 1, justifyContent: 'center' }} >
                <Text style={{ alignSelf: 'center', fontWeight: 'bold', color: 'black' }}> Currently data is not avaliable</Text>
            </View>
        
        </>
    )
}
export default MainNotification;