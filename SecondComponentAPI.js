
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
  }
  forSockets(){
   
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
