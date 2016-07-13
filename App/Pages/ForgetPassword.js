import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  ActivityIndicator
} from 'react-native';

class ForgetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user,
      password: '',
      isLoading: false,
      message: false
    }
  }

  onPress() {

    this.setState({
      isLoading: true
    });

    setTimeout(() => {
      if (this.state.user === 'eric') {
        this.setState({
          isLoading: false,
          message: 'Sua senha foi enviada por email',
        })
      } else {
        this.setState({
          message: 'Esse email não existe em nosso banco de dados',
          isLoading: false
        })
      }
    }, 1000);
  }

  _backLogin() {
    this.props.navigator.push({
      id: 'Login'
    });
  }


  render() {
    let showErr = (
      this.state.message ? <Text style={ styles.error }> {this.state.message }</Text> : <View></View>
    );

    return (
      <View style={styles.container}>

        <Text style={styles.welcome}>
          Skoola
        </Text>
        <Text style={styles.instructions}>
          Sua senha será enviada por email.
        </Text>

        <TextInput
          style={styles.input}
          autoCapitalize="none"
          selectTextOnFocus={ true }
          placeholderTextColor="#aaa"
          value={this.state.user}
          onChange={(val) => this.setState({ user: val.nativeEvent.text })}
          placeholder="Email" />

        <TouchableHighlight
          style={ styles.button }
          onPress={ this.onPress.bind(this) }
          underlayColor="#ddd" >
          <Text style={ styles.buttonText}>Enviar</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.forgetPassword}
          underlayColor="#ddd"
          onPress={this._backLogin.bind(this)}>
          <Text style={styles.forgetPasswordText}>Voltar ao login</Text>
        </TouchableHighlight>

        { this.state.isLoading ? <View></View> : showErr }

        <ActivityIndicator
          animating={ this.state.isLoading }
          color="white"
          size="large" />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'rgb(131, 92, 180)',
  },
  welcome: {
    margin: 10,
    fontSize: 36,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'rgb(75, 235, 254)',
  },
  instructions: {
    textAlign: 'center',
    color: 'white',
    marginBottom: 15,
  },
  input: {
    height: 50,
    padding: 10,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 4,
    color: 'white',
    marginBottom: 10,
  },
  button: {
    height: 50,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 23,
    color: '#111',
    alignSelf: 'center',
  },
  error: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center',
  },
  forgetPassword: {
    marginBottom: 25,
  },
  forgetPasswordText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default ForgetPassword;
