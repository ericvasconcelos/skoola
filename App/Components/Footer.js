import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

class Footer extends Component {

  render() {
    return (
      <View style={styles.footer}>
        <View style={styles.tab}>
          <Image style={styles.tabImage} source={require('../../img/icon.png')} />
          <Text style={styles.tabText}>Assistente</Text>
        </View>

        <View style={styles.tab}>
          <Image style={styles.tabImage} source={require('../../img/icon.png')} />
          <Text style={styles.tabText}>Calendário</Text>
        </View>

        <View style={styles.tab}>
          <Image style={styles.tabImage} source={require('../../img/icon.png')} />
          <Text style={styles.tabText}>Mensagens</Text>
        </View>

        <View style={styles.tab}>
          <Image style={styles.tabImage} source={require('../../img/icon.png')} />
          <Text style={styles.tabText}>Config</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    backgroundColor: 'rgb(100, 60, 150)'
  },
  tab: {
    alignSelf: 'center',
  },
  tabImage: {
    alignSelf: 'center',
  },
  tabText: {
    fontSize: 12,
    color: 'white'
  }
});


export default Footer;