import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  ActivityIndicator
} from 'react-native';
import Assistent from './Assistent';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      password: '',
      isLoading: false,
      error: false
    }
  }

  onPress() {

    this.setState({
      isLoading: true
    });

    setTimeout(() => {
      if (this.state.user === "Eric" && this.state.password === "1234") {
        this.props.navigator.push({
          id: 'Assistent',
          passProps: { user: this.state.user }
        });

        this.setState({
          isLoading: false,
          error: false,
          user: '',
          password: ''
        })
      } else {
        this.setState({
          error: 'informações incorretas',
          isLoading: false
        })
      }
    }, 1000);
  }

  render() {
    let showErr = (
      this.state.error ? <Text style={ styles.error }> {this.state.error }</Text> : <View></View>
    );

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Skoola
        </Text>
        <Text style={styles.instructions}>
          Fique por dentro das informações do seu filho na escola.
        </Text>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          selectTextOnFocus={ true }
          placeholderTextColor="#aaa"
          onChange={(val) => this.setState({ user: val.nativeEvent.text })}
          placeholder="Email" />
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          secureTextEntry={ true }
          placeholderTextColor="#aaa"
          onChange={(val) => this.setState({ password: val.nativeEvent.text })}
          placeholder="Senha" />
        <TouchableHighlight
          style={ styles.button }
          onPress={ this.onPress.bind(this) }
          underlayColor="#ddd" >
          <Text style={ styles.buttonText}>Entrar</Text>
        </TouchableHighlight>
         {
          this.state.isLoading ? <View></View> : showErr
         }
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
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 23,
    color: '#111',
    alignSelf: 'center'
  },
  error: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
});

export default Login;
