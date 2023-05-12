import {StyleSheet, Text, View, SafeAreaView, Pressable,ActivityIndicator} from 'react-native';
import React, {useState} from 'react';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import ArrowOrangeLeft from '../../svg/ArrowOrangeLeft.svg';
import {getmycart, otpVerify} from '../../api/api';
import {useDispatch} from 'react-redux';
import {AUTH_TYPE} from '../../redux/action/authAction';
import {setSession} from '../../api/authAxios';
import { Store } from '../../redux/Store';
const CELL_COUNT = 6;

const OtpConfirmScreen = ({navigation, route}) => {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const[showActivityIndicator,setShowActivityIndicator]=useState(false)
  const dispatch = useDispatch();

  const storeUserData = userData => {
    dispatch({type: AUTH_TYPE.RECEIVED_USER_DATA, payload: userData});
  };

  const storeMyCartOnReduxStore= async(userid)=>{
    let response= await getmycart(userid)
    //console.log("***MyCart responce***",response.data)
    let payload= response.data.map((cart)=> cart.productId)
    //console.log("***payload***",payload)
    dispatch({type: AUTH_TYPE.GET_MY_CART_DATA,payload:payload})
   //console.log("******state******",Store.getState())
  }

  const verifyOTP = async () => {
    setShowActivityIndicator(true)
    let payload = {
      phoneNumber: route.params?.phoneNumber,
      verificationKey: route.params?.key,
      otp: value,
    };
    console.log(payload, 'payload');

    try {
      let res = await otpVerify(payload);

      if (res) {
        setShowActivityIndicator(false)
        const {user, accessToken, refreshToken} = res.data.data;
        storeUserData(user);
        setSession(accessToken, refreshToken);
        storeMyCartOnReduxStore(user.id)
        navigation.navigate('Home');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.root}>
    <View >
      <ArrowOrangeLeft ></ArrowOrangeLeft>
      </View>
      <View style={{marginHorizontal: 20}}>
        <View style={{marginVertical: 20}}>
          <Text style={styles.title}>Please Verify</Text>
          <Text style={styles.title}>Your Number</Text>
          <View style={{marginVertical: 10}}>
            <Text style={{color: '#000'}}>Enter the OTP code that we have</Text>
            <Text style={{color: '#000'}}>
              sent by text to {route.params?.phoneNumber}
            </Text>
          </View>
        </View>

        <CodeField
          ref={ref}
          {...props}
          // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({index, symbol, isFocused}) => (
            <Text
              key={index}
              style={[styles.cell, isFocused && styles.focusCell]}
              onLayout={getCellOnLayoutHandler(index)}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          )}
        />
        <View>
          {!showActivityIndicator &&<Pressable
            style={{
              backgroundColor: '#FF5403',      
              justifyContent: 'center',
              alignItems: 'center',
              paddingVertical: 6,
              borderRadius: 10,
            }}
            onPress={verifyOTP}>
            <Text style={{fontSize: 25, color: 'white'}}>Submit</Text>
          </Pressable>}

          {showActivityIndicator && <ActivityIndicator></ActivityIndicator>}
        </View>
       {/* <Text
          style={{
            marginVertical: 20,
            color: '#FF5403',
            textDecorationLine: 'underline',
            alignSelf: 'center',
          }}>
          Resend OTP
        </Text>
      */}
      </View>
    </SafeAreaView>
  );
};

export default OtpConfirmScreen;

const styles = StyleSheet.create({
  root: {flex: 1, padding: 20},
  title: {fontSize: 30, color: 'black'},
  codeFieldRoot: {
    marginVertical: 20,
  },
  cell: {
    width: 35,
    height: 35,
    fontSize: 24,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#444',
    backgroundColor: '#444',
    textAlign: 'center',
    color: 'white',
  },
  focusCell: {
    borderColor: '#000',
  },
});
