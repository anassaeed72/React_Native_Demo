
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
        languages: [],
        socketAnswer:''
    }
  }
  componentWillMount(){
    var self = this
    this.apiRequest(self)
    this.forSockets()
  }
  forSockets(){
   console.log("In sockets")
    var ws = new WebSocket('ws://echo.websocket.org/');

    ws.onopen = () => {
      // connection opened

      ws.send('React Native Presentation Sockets'); // send a message
      console.log("In onopen")
    };

    ws.onmessage = (e) => {
      // a message was received
      console.log(e.data);
      this.setState({socketAnswer: e.data});
      console.log("in onmessage")
    };

    ws.onerror = (e) => {
      // an error occurred
      console.log(e.message);
      console.log("in on error")
    };

    ws.onclose = (e) => {
      // connection closed
      console.log(e.code, e.reason);
      console.log("in onclose")
    };
  }
  async  apiRequest(self){
   try {
      console.log("starting api request")
      let response = await fetch('https://codeshare-reactapp.herokuapp.com/api/code/languages');
      let responseJson = await response.json();
      // return responseJson.movies;
      self.setState({languages: responseJson.languages});
      console.log(responseJson)
      console.log(this.state.languages)
    } catch(error) {
      console.error(error);
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
        <View>{languages}</View>             
        <Text>{this.state.socketAnswer} </Text>
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
