
import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  ActivityIndicator,
  Image
} from 'react-native';


class SecondComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
        languages:[],
        socketAnswer:''
    }
  }
  componentWillMount(){
    var self = this
    this.apiRequest(self)
    this.forSockets()
  }
  forSockets(){
    var ws = new WebSocket('ws://echo.websocket.org/');
    ws.onopen = () =>{
      ws.send("React Native Presentation Sockets Demo")
    }
    ws.onmessage = (reply) =>{
      this.setState({socketAnswer:reply.data})
    }
  }
  async apiRequest(self){
   try{
    let response = await fetch('https://codeshare-reactapp.herokuapp.com/api/code/languages')
    let responseJson = await response.json()
    self.setState({languages:responseJson.languages});
   } catch(error){
      console.log(error)
   }
  } 
  
  render() {
    var languages = this.state.languages.map((language)=>
      <Text> {language} </Text>)
        return (

    <View style={styles.container}>
        <Text style={styles.welcome} >
          Welcome to React Native!
        </Text> 
        <Text> The languages are the following </Text>
        <View>{languages}</View>  
        <Text> {this.state.socketAnswer} </Text>           
      </View>  
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

module.exports = SecondComponent;
