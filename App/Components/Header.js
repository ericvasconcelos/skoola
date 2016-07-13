import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

class Header extends Component {

  render() {
    return (
      <View style={styles.header}>

        <TouchableHighlight
          style={styles.home}>
          <Text style={styles.homeItem}>H</Text>
        </TouchableHighlight>

        <Text style={styles.logo}>Skoola</Text>

        <TouchableHighlight
          style={styles.config}>
          <Text style={styles.configItem}>C</Text>
        </TouchableHighlight>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    marginTop: 30,
    height: 60,
    backgroundColor: 'rgb(100, 60, 150)',
    justifyContent: 'center',
  },
  home: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeItem: {
    fontSize: 20,
    color: 'white',
  },
  logo: {
    flex: 6,
    alignSelf: 'center',
    fontSize: 34,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'rgb(75, 235, 254)',
  },
  config: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  configItem: {
    fontSize: 20,
    color: 'white',
  }

});

export default Header;