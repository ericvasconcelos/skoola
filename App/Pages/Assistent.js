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

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  wrap: {
    padding: 20,
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'rgb(131, 92, 180)',
  }
});

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user,
      cards: [
        {
          "id": "0",
          "url": "url-0",
          "title": "Teste de Matemática - Primeiro Bimestre",
          "type": "Prova",
          "date": {
            "day": "15",
            "month": "06",
            "year": "2016"
          }
        },
        {
          "id": "1",
          "url": "url-1",
          "title": "Festa de São João da Turma do João com participacão do Patati Patata e Ursinho",
          "type": "Evento",
          "date": {
            "day": "20",
            "month": "06",
            "year": "2016"
          }
        },
        {
          "id": "2",
          "url": "url-2",
          "title": "Aulão sobre Van Gogh",
          "type": "Prova",
          "date": {
            "day": "25",
            "month": "06",
            "year": "2016"
          }
        },
        {
          "id": "3",
          "url": "url-3",
          "title": "Novidade: Desconto na Cantina para Pagamentos Mensais!",
          "type": "Nota",
          "date": {
            "day": "01",
            "month": "07",
            "year": "2016"
          }
        },
        {
          "id": "4",
          "url": "url-4",
          "title": "Teste de Português - Primeiro Bimestre",
          "type": "Prova",
          "date": {
            "day": "02",
            "month": "07",
            "year": "2016"
          }
        },
        {
          "id": "5",
          "url": "url-5",
          "title": "Aniversário do Pedrinho (Segunda Série)",
          "type": "Evento",
          "date": {
            "day": "15",
            "month": "07",
            "year": "2016"
          }
        },
        {
          "id": "6",
          "url": "url-6",
          "title": "Almoço de Aniversário da Tia Silvana",
          "type": "Evento",
          "date": {
            "day": "12",
            "month": "08",
            "year": "2016"
          }
        },
        {
          "id": "7",
          "url": "url-7",
          "title": "Almoço de Aniversário da Tia Silvana",
          "type": "Evento",
          "date": {
            "day": "12",
            "month": "08",
            "year": "2016"
          }
        },
        {
          "id": "8",
          "url": "url-8",
          "title": "Almoço de Aniversário da Tia Silvana",
          "type": "Evento",
          "date": {
            "day": "12",
            "month": "08",
            "year": "2016"
          }
        }
      ]
    }
  }

  render() {
    let cards = this.state.cards;

    return (
      <View style={ styles.mainContainer }>
        <Header />
        <ScrollView style={ styles.wrap } >
          <Cards infos={ cards } ></Cards>
        </ScrollView>
        <Footer />
      </View>
    );
  }
}

export default Login;