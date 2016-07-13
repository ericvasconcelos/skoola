import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image
} from 'react-native';

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      read: false
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
    let info = this.props.infos;

    return (
      <View style={styles.cardWrap}>

        <TouchableHighlight style={[styles.card, this._getColorOfType(info.type)]}>
          <View style={ styles.cardContainer }>

            <View style={styles.cardDate}>
              <Text style={styles.cardDateDay}>{info.date.day}</Text>
              <Text style={styles.cardDateMonth}>{ this._getMonth(info.date.month)}</Text>
            </View>

            <View style={styles.cardTitle}>
              <Text style={styles.cardTitleText} numberOfLines={3}>{info.title}</Text>
            </View>

          </View>
        </TouchableHighlight>

      </View>
    )
  }
}

var styles = StyleSheet.create({
  cardWrap: {
    marginBottom: 15,
  },
  card: {
    borderRadius: 5,
    borderLeftWidth: 4,
    backgroundColor: 'white',
    padding: 7,
  },
  cardContainer: {
    flexDirection: 'row',
  },
  cardDate: {
    flex: 1,
    paddingTop: 5,
    paddingRight: 10,
    paddingBottom: 5,
    paddingLeft: 5,
    borderRightColor: 'rgb(220, 220, 220)',
    borderRightWidth: 1,
    alignItems: 'center',
  },
  cardDateDay: {
    fontSize: 24,
    color: 'rgb(131, 131, 131)',
  },
  cardDateMonth: {
    fontSize: 16,
    color: 'rgb(131, 131, 131)',
  },
  cardTitle: {
    flex: 6,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 12,
    justifyContent: 'center',
  },
  cardTitleText: {
    fontSize: 16,
    color: 'rgb(131, 131, 131)',
  }

});

export default Cards;

// return (
//     <View style={styles.cardWrap}>
//       <View style={styles.type}>
//         <Text style={styles.typeText}>{ info.type }</Text>
//       </View>

//       <TouchableHighlight style={[styles.card, this._getColorOfType(info.type)]}>
//         <View>
//           <View style={styles.cardDate}>
//           <Text>{info.date.day}</Text>
//             <Text>{info.date.month}</Text>
//           </View>
//           <View style={styles.cardTitle}>
//             <Text>{info.title}</Text>
//           </View>
//         </View>
//       </TouchableHighlight>

//       <View style={styles.actions}>
//         <TouchableHighlight style={styles.favorite}>
//           <View>
//             <Image style={styles.favoriteImage} source={require('../../img/icon.png')} />
//             <Text style={styles.favoriteText}>Favoritar</Text>
//           </View>
//         </TouchableHighlight>
//         <TouchableHighlight style={styles.alert}>
//           <View>
//             <Image style={styles.alertImage} source={require('../../img/icon.png')} />
//             <Text style={styles.alertText}>Lembrete</Text>
//           </View>
//         </TouchableHighlight>
//       </View>
//     </View>
//   )













