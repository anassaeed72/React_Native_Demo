/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  NavigatorIOS,
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

var Other = require('./Other');
var ReactNative = require('react-native');
var SecondComponent = require('./SecondComponent');

export default class Navigation123 extends Component {
  render() {
    return (
     <NavigatorIOS
      initialRoute={{component: Other,
        title:'SecondComponent'}} style = {{flex:1}} />
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

AppRegistry.registerComponent('Navigation123', () => Navigation123);




/*
 <NavigatorIOS
        initialRoute={{
          component: SecondComponent,
          title: 'My Initial Scene',
        }}
        style={{flex: 1}}
      />
      */