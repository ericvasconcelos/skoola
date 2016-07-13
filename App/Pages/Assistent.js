import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  ActivityIndicator,
  ScrollView
} from 'react-native';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Cards from '../Components/Cards';
import cardItems from '../Utils/content.json';


const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  wrap: {
    padding: 20,
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'rgb(131, 92, 180)'
  }
});

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user,
      cards: cardItems
    }
  }

  render() {
    let cards = this.state.cards;

    return (
      <View style={ styles.mainContainer }>
        <Header />
        <ScrollView style={ styles.wrap } >
          {
            cards.map((card, i) => <Cards infos={ card } key={ i }></Cards>)
          }
        </ScrollView>
        <Footer />
      </View>
    );
  }
}

export default Login;