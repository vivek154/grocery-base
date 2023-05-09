import {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  StatusBar,
  Pressable,
  ScrollView,
} from 'react-native';

const Register = props => {
  const [formValue, setFormValue] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    password: '',
  });
  return (
    <View style={{backgroundColor: 'white'}}>
      <ScrollView>
        <View style={{backgroundColor: 'white'}}>
          <Image
            style={styles.image}
            source={require('../../images/image3.jpg')}
          />
        </View>
        <View>
          <Text
            style={{
              alignSelf: 'flex-start',
              marginLeft: 60,
              fontWeight: 'bold',
              fontSize: 30,
              color: '#000',
            }}>
            Register
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Your Name "
            value={formValue.fullName}
            onChangeText={(newText)=>setFormValue({
              ...formValue,fullName:newText
            })}></TextInput>

          <TextInput
            style={styles.input}
            placeholder="Email "
            value={formValue.email}
            onChangeText={(newText)=>setFormValue({
              ...formValue,email:newText
            })}></TextInput>

          <TextInput
            value={formValue.phoneNumber}
            style={styles.input}
            placeholder="Mobile number"
            onChangeText={(newText)=>setFormValue({
              ...formValue,phoneNumber:newText
            })}></TextInput>

          <TextInput
            value={formValue.password}
            style={styles.input}
            placeholder="Password"
            onChangeText={(newText)=>setFormValue({
              ...formValue,password:newText
            })}></TextInput>

          <Pressable style={styles.pressable}>
            <Text
              style={styles.text}
              onPress={()=>{
                validate()
              }}>
              Submit
            </Text>
          </Pressable>
          <Text
            style={{marginLeft: 100, marginBottom: 50, color: '#000'}}
            onPress={() => props.navigation.navigate('LoginScreen')}>
            {' '}
            Have an account <Text style={{color: 'red'}}>Login</Text>
          </Text>

          <StatusBar style="auto" />
        </View>
      </ScrollView>
    </View>
  );
};
export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',

    padding: 100,
  },
  input: {
    margin: 8,
    padding: 10,
    width: 290,
    height: 45,
    borderWidth: 1,
    marginLeft: 40,
    marginRight: 50,
    borderRadius: 29,
    color: 'black',
  },
  pressable: {
    margin: 12,
    padding: 12,
    width: 290,
    height: 45,
    borderWidth: 1,
    marginLeft: 40,
    marginRight: 50,
    borderRadius: 29,
    backgroundColor: 'black',
  },

  image: {
    marginTop: 10,
    backgroundColor: 'white',
    marginLeft: 55,
    width: 250,
    height: 240,
    borderWidth: 3,
    resizeMode: 'contain',
  },

  text: {
    marginLeft: 100,
    color: 'white',
  },
  anchor1: {
    marginLeft: 140,
    color: 'red',
    textDecorationLine: 'underline',
  },
  anchor2: {
    marginLeft: 100,
  },
});
