/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  Platform,
  StyleSheet,
  Text,
  View, 
  Image,
  Alert,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  ImageBackground,
  TextInput
} from 'react-native';


function App(): JSX.Element {
  return (
    <View style={styles.containerStyle}>
      <Image style={styles.imageStyle} source={require('./HOMIES.png')}></Image>
      <Text style={styles.textStyle}>Nhấn nút này chào nhau cái đê :v</Text>
      <TouchableHighlight underlayColor={'#FF0000'} onPress={() => { Alert.alert('Xin chào mọi người ^-^', 'Đây là demo nho nhỏ của nhóm mềnh :)))',);}}>
        <View style={{backgroundColor:'#990000', borderTopLeftRadius:10, borderTopRightRadius:10, borderBottomLeftRadius:10, borderBottomRightRadius:10}}>
          <Image style={styles.imageButtonStyle} source={require('./smile.png')}></Image>
        </View>
      </TouchableHighlight>
      <Text style={styles.textStyle}>Nhấn nút be bé này để biết thêm về nhóm nha</Text>
      <TouchableOpacity onPress={() => { Alert.alert('Các thành viên:', '1. Phạm Võ Thanh Liêm - 47.01.104.119 \n2. Đỗ Huỳnh Khải - 47.01.104.105 \n3. Nguyễn Trọng Nghĩa - 47.01.104.140 \n4. Lưu Anh Dũng - 47.01.104.071 \n5. Hồ Trần Gia Khánh - 47.01.104.111',);}}>  
        <Image style={styles.imageButtonStyle} source={require('./button.png')}></Image>
      </TouchableOpacity>
      <TextInput
          style={{marginTop:30,height: 40, backgroundColor:'white',borderTopLeftRadius:10, borderTopRightRadius:10, borderBottomLeftRadius:10, borderBottomRightRadius:10}}
          placeholder="Cho tụi mình ý kiến nhe"
        />
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFCC99',
  },
  textStyle:{
    color:'#990000',
    fontSize: 30,
    textAlign:'center',
    justifyContent:'center',
  },
  imageStyle:{
    width: 300, height: 300,  
  },
  imageButtonStyle:{
    width:50, height:50
  }
});

export default App;
