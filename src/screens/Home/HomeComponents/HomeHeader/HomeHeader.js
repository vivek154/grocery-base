import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
  ScrollView,
  Image,
  TextInput,
  Pressable,
  Keyboard,
} from 'react-native';
const width = Dimensions.get('screen').width;
import BurgerIcon from '../../../../svg/BurgerIcon.svg';
import BellWhiteIcon from '../../../../svg/BellWhiteIcon.svg';
import BasketWhiteIcon from '../../../../svg/BasketWhiteIcon.svg';
import SearchIcon from '../../../../svg/SearchIcon.svg';

const HomeHeader = props => {
  const {
    navigation,
    searchKeyWord,
    setSearchKeyWord,
    setShowResults,
    makeApiRequest,
  } = props;

  const handleInputChange = newText => {
    console.log('value', newText);
    setSearchKeyWord(newText);
    if (newText !=='') {
      setShowResults(true);
      makeApiRequest(newText);
    }
    else {
      setShowResults(false)
      Keyboard.dismiss()
    }
  };

  function showNotifications() {
    navigation.navigate('MainNotification');
  }
  function showMyCart() {
    navigation.navigate('MyCartPage');
  }
  function showProfile() {
    navigation.navigate('MyProfile');
  }
  return (
    <View style={{width: '100%'}}>
      <View style={styles.header}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
            marginVertical:10,
            alignSelf: 'center',
          }}>
          <View style={{marginLeft: 0}}>
            <BurgerIcon
              width={0.063 * width}
              height={0.063 * width}></BurgerIcon>
          </View>
          <View
            style={{flexDirection: 'row', marginRight: 0, gap: 0.05 * width}}>
            <Pressable onPress={showNotifications}>
              <BellWhiteIcon
                width={0.063 * width}
                height={0.063 * width}></BellWhiteIcon>
            </Pressable>

            <Pressable onPress={showMyCart}>
              <BasketWhiteIcon
                width={0.063 * width}
                height={0.063 * width}></BasketWhiteIcon>
            </Pressable>

            <Pressable onPress={showProfile}>
              <Image
                source={require('./SVG/profilePic.png')}
                style={{width: 0.063 * width, height: 0.063 * width}}></Image>
            </Pressable>
          </View>
        </View>

        <View
          style={{
            marginTop: 20,
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 2,
            borderColor: 'white',
            width: '100%',
            height: 40,
            alignSelf: 'center',
            borderRadius: 30,
            overflow: 'hidden',
          }}>
          <SearchIcon
            width={0.063 * width}
            height={0.063 * width}
            style={{marginLeft: 0.02 * width}}></SearchIcon>
          <TextInput
            
          
            placeholder="Search Your Keyword"
            placeholderTextColor="white"
            style={styles.searchBar}
            selectionColor={'white'}
            onChangeText={newText => handleInputChange(newText)}></TextInput>
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#ff5403',
    color: '#ffffff',
    minWidth: '100%',
    paddingBottom:20,
    borderBottomLeftRadius: 0.1 * width,
    borderBottomRightRadius: 0.1 * width,
    paddingHorizontal:20
  },
  container: {
    flex: 1,
  },
  searchBar: {
    color: 'white',
    height: 40,
  },
});
