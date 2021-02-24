import { StyleSheet, Text, View, TouchableOpacity, Image, Touchable, Component, TextInput } from 'react-native'
import FormButton from './FormButton'
import FormInput from './FormInput'
import SocialButton from './SocialButton'
import React, { useContext, useState } from 'react';
import Firebase from '../config/Firebase'
import { AuthContext } from './AuthProvider';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



class Login extends React.Component {
  handleLogin = () => {
    const { email, password } = this.state

    Firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => this.props.navigation.navigate('Home') )
      .catch(error => console.log(error))
  }

  render() {
    return (
      <View style={styles.container}>
      
        <Image source={require('../../assets/rubber-duck.png')} style={styles.logo}/>
        <Text style={styles.text}>Ride the Duck</Text>
        <FormInput
          iconType="user"
          onChangeText={email => this.setState({ email })}
          placeholder='Email'
          autoCapitalize="none"
        autoCorrect={false}
        />
        <FormInput
          iconType="lock"
          onChangeText={password => this.setState({ password })}
          placeholder='Password'
          autoCapitalize='none'
          secureTextEntry={true}
          autoCapitalize="none"
        autoCorrect={false}
        />
        <FormButton
          buttonTitle="Log In"
          onPress={this.handleLogin}
        />

        <TouchableOpacity style={styles.navButton} onPress={() => { this.props.navigation.navigate('Signup') }}>
          <Text style={styles.navButtonText}>Don't have an account? Create here</Text>
        </TouchableOpacity>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputBox: {
    width: '85%',
    margin: 10,
    padding: 15,
    fontSize: 16,
    borderColor: '#d3d3d3',
    borderBottomWidth: 1,
    textAlign: 'center'
  },
  logo: {
        height: 150,
        width: 150,
        resizeMode: 'cover',
      },
  button: {
    marginTop: 30,
    marginBottom: 20,
    paddingVertical: 5,
    alignItems: 'center',
    backgroundColor: '#FFA611',
    borderColor: '#FFA611',
    borderWidth: 1,
    borderRadius: 5,
    width: 200
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#546747'
  },
  buttonSignup: {
    fontSize: 20
  },

  container: {
    backgroundColor: '#f9fafd',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    // fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 28,
    marginBottom: 10,
    color: "#546747",
    fontWeight: 'bold',
    marginBottom: 50,
  },
  navButton: {
    marginTop: 15,
  },
  navButtonText: {
    fontSize: 20,
    fontWeight: '500',
    color: '#2e64e5',
    // fontFamily: 'Lato-Regular',
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 35,
    justifyContent: 'center',
  },
  color_textPrivate: {
    fontSize: 13,
    fontWeight: '400',
    // fontFamily: 'Lato-Regular',
    color: 'grey',
  },
})

export default Login