//App.js
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native';

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.icon}>
          <TouchableOpacity style={styles.icon}>
            <Image source={require('./icon/iconX.png')}/>
          </TouchableOpacity>
        </View>

        <View style={styles.title}>
          <Text> 결제 정보 등록 </Text>
        </View>

        <View style={styles.below}>
          <Text> 아이디 </Text>
          <Text> 공인인증서 </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'violet'
  },
  icon:{
    flex:0.5,
    // top:'9%',
    marginRight:'1.4%',
    alignItems: 'flex-end',
    backgroundColor: 'gold'

  },
  title:{
    flex:1,
    // top:'1%',
    // fontSize:100,
    // fontWeight:'bold',
    backgroundColor:'blue',
    alignItems:'center'
  },
  below:{
    flex:8,
    backgroundColor:'lightgrey',
    // flexDirection:'row',
    // justifyContent:'space-around',
  },
});
