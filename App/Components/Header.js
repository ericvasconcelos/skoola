import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

const styles = StyleSheet.create({
  header: {
    
  },
});

class Header extends Component {

  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.monthText}>Header</Text>
      </View>
    );
  }
}

export default Header;