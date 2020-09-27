//App.js
import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Switch, Image, TextInput, TouchableOpacity }
 from 'react-native';
import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input";
import {StackNavigator} from 'react-navigation'
import MainScreen from './MainScreen'
import Sub1Screen from './Sub1Screen'
import Sub2Screen from './Sub2Screen'


export default class App extends React.Component {
  state = { useLiteCreditCardInput: false };
  _onChange = (formData) => console.log(JSON.stringify(formData, null, " "));
  _onFocus = (field) => console.log("focusing", field);
  _setUseLiteCreditCardInput = (useLiteCreditCardInput) => this.setState({ useLiteCreditCardInput });
  render() {
    return (
      <View style={s.contain}>
        <View style={s.icon}>
          <TouchableOpacity style={s.icon}>
            <Image source={require('./icon/iconX.png')}/>
          </TouchableOpacity>
        </View>

        <View>
          <Text style={s.title}> 결제 정보 등록 </Text>
        </View>

        {/* <View style={s.below}>
          <Text> 아이디 </Text>
          <Text> 공인인증서 </Text>
        </View> */}
        <View style={s.container}>
        {/* <Text sytle={s.switchText}>
          입력방식 전환
        </Text> */}
        <Switch
          style={s.switch}
          onValueChange={this._setUseLiteCreditCardInput}
          value={this.state.useLiteCreditCardInput} />


        { this.state.useLiteCreditCardInput ?
          (
            <LiteCreditCardInput
              autoFocus
              inputStyle={s.input}

              validColor={"black"}
              invalidColor={"red"}
              placeholderColor={"darkgray"}

              onFocus={this._onFocus}
              onChange={this._onChange} />
          ) : (
            <CreditCardInput
              autoFocus

              requiresName
              requiresCVC
              requiresPostalCode

              labelStyle={s.label}
              inputStyle={s.input}
              validColor={"black"}
              invalidColor={"red"}
              placeholderColor={"darkgray"}

              onFocus={this._onFocus}
              onChange={this._onChange} />
          )
        }
      </View>
      </View>
      
    );
  }
}
const A = StackNavigator({
  Main : {
    screen : MainScreen,
    navigationOptions: {
      title: 'Main',
    }
  },
  Sub1 : {
    screen : Sub1Screen,
    navigationOptions: {
      title: 'Sub1',
    }
  },
  Sub2 : {
    screen : Sub2Screen,
    navigationOptions: {
      title: 'Sub2',
    }
  },

});

const s = StyleSheet.create({
  contain:{
    backgroundColor: 'white'
  },
  icon:{
    flex:0.5,
    margin:6,
    marginRight:'1.4%',
    alignItems: 'flex-end',
    backgroundColor: 'gold'

  },
  title:{
    // flex:1,
    marginTop:6,
    fontSize:16, 
    fontWeight:'bold',
    backgroundColor:'white',
    alignSelf:'center'
  },
  below:{
    flex:8,
    backgroundColor:'lightgrey',
    // flexDirection:'row',
    // justifyContent:'space-around',
  },
  // switchText:{
  //   justifyContent: "center",
  //   alignSelf:'center',
  //   fontSize:14
  // },
  switch: {
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  container: {
    backgroundColor: "lightgrey",
    marginTop: 60,
  },
  label: {
    color: "black",
    fontSize: 12,
  },
  input: {
    fontSize: 16,
    color: "black",
  },

});
