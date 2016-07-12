import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';


var styles = StyleSheet.create({
  
});

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      read: false,
      left: {
        left: 0
      },
      leftOpen: false,
      rightOpen: false
    }
  }

  componentWillMount() {
  }

  _getMonth(month) {
    var months = {
      "01": "jan",
      "02": "fev",
      "03": "mar",
      "04": "abr",
      "05": "mai",
      "06": "jun",
      "07": "jul",
      "08": "ago",
      "09": "set",
      "10": "out",
      "11": "nov",
      "12": "dez"
    };
    return months[month];
  }

  _getColorOfType(type) {
    var types = {
      "Nota": {
        "borderLeftColor": "rgb(255, 232, 144)"
      },
      "Evento": {
        "borderLeftColor": "rgb(177, 236, 148)"
      },
      "Prova": {
        "borderLeftColor": "rgb(144, 193, 255)"
      }
    }
    return types[type];
  }

  _openPopup(e, i) {
    console.log(e, i);
  }

  render() {
    return null;
  }
}

export default Cards;