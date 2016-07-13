/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator
} from 'react-native';
import Login from './App/Pages/Login';
import Assistent from './App/Pages/Assistent';

class Skoola extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{id: 'Assistent'}}
        renderScene={this.renderScene.bind(this)}
      />
    );
  }

  renderScene(route, navigator) {
    var routeId = route.id;
    
    if (routeId === 'Login') {
      return (
        <Login navigator={navigator} />
      );
    }
    if (routeId === 'Assistent') {
      return (
        <Assistent navigator={navigator} />
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(131, 92, 180)',
  }
});

AppRegistry.registerComponent('Skoola', () => Skoola);
