import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  ScrollView,
  Linking,
  StatusBar,
  ActivityIndicator
} from 'react-native';
import React, {useState} from 'react';
import Mybutton from '../Mybutton';
import {mobileLogin} from '../../api/api';

const LoginScreen = ({navigation}) => {
  function showRegistration() {
    navigation.navigate('Register');
  }

  const [mobNo, setMobNo] = useState('');
  const [showActivityIndicator,setShowActivityIndicator] = useState(false)

  const handleGetOtp = async () => {
    setShowActivityIndicator(true)
    let postData = {phoneNumber: String(mobNo), roleId: 2};
    
    try {
      let res = await mobileLogin(postData);
      if (res && res.data) {
        setShowActivityIndicator(false)
        let key = res.data.data;
        navigation.navigate('OtpConfirmScreen', {
          key: key,
          phoneNumber: String(mobNo),
        });
      }
    } catch (error) {
      setShowActivityIndicator(false)
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.imgApple}
        source={require('../../images/apple.jpg')}></Image>
      <View style={styles.inputContainer}>
        <Text
          style={{
            alignSelf: 'flex-start',
            marginLeft: 20,
            fontWeight: 'bold',
            fontSize: 30,
            color: '#000',
          }}>
          Login
        </Text>
        <TextInput
          style={styles.ipMobNo}
          placeholder="Enter Mobile no"
          keyboardType="numeric"
          onChangeText={setMobNo}
          value={mobNo}></TextInput>
        
          { 
            !showActivityIndicator && 
            <Mybutton
            onPress={handleGetOtp}
            btnTxt="GET OTP"
            txtColor="#ffffff"
            myButton={styles.myButton}
            width={300}></Mybutton>
          }
          {
            showActivityIndicator &&
            <ActivityIndicator></ActivityIndicator>
          }
        <Text
          style={{
            color: '#ff9900',
            textDecorationLine: 'underline',
            marginTop: 10,
          }}
          onPress={() => Linking.openURL('/')}>
          Forget Password?
        </Text>
        <Text style={{marginTop: 40}}>
          Don't have an account
          <Text style={{color: '#ff9900'}} onPress={showRegistration}>
            {' '}
            Register?
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgApple: {
    width: 300,
    height: 200,
    resizeMode: 'contain',
  },
  ipMobNo: {
    height: 40,
    width: 300,
    margin: 12,
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    color: 'black',
  },
  myButton: {
    backgroundColor: '#000000',
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 20,
    padding: 10,
    width: 300,
    marginTop: 15,
    fontWeight: 'bold',
    fontSize: 17,
  },
});
