import { StyleSheet, Text, View, TouchableOpacity, Image, Touchable, Component, TextInput } from 'react-native'
import FormButton from './FormButton'
import FormInput from './FormInput'
import SocialButton from './SocialButton'
import React, { useContext, useState } from 'react';
import Firebase from '../config/Firebase'
import { AuthContext } from './AuthProvider';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



class Signup extends React.Component {
  state = {
    name: '',
    email: '',
    password: ''
  }

  handleSignUp = () => {
    const { email, password } = this.state
    Firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => this.props.navigation.navigate('Login') )
      .catch(error => console.log(error))
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Create an account</Text>
        <FormInput
          iconType="user"
          value={this.state.name}
          onChangeText={name => this.setState({ name })}
          placeholder='Full Name'
        />
        <FormInput
          iconType="envelope-o"
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
          placeholder='Email'
          autoCapitalize='none'
        />
        <FormInput
          iconType="lock"
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
          placeholder='Password'
          secureTextEntry={true}
        />

        <FormButton
          buttonTitle="Sign Up"
          onPress={this.handleSignUp}
        />

        <View style={styles.textPrivate}>
          <Text style={styles.color_textPrivate}>By registering, you confirm that you accept our</Text>
          <TouchableOpacity onPress={() => alert('Quack!')}><Text style={[styles.color_textPrivate, { color: '#e88832' }]}>Terms of Service</Text></TouchableOpacity>
          <Text style={styles.color_textPrivate}> and </Text>
          <TouchableOpacity onPress={() => alert('Quack!')}><Text style={[styles.color_textPrivate, { color: '#e88832' }]}>Privacy Policy</Text></TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.navButton} onPress={() => { this.props.navigation.navigate('Login') }}>
          <Text style={styles.navButtonText}>Have an account? Sign In</Text>
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
    color: '#fff'
  },
  buttonSignup: {
    fontSize: 12
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
    fontWeight: 'bold',
    marginBottom: 50,
    color: '#546747',
  },
  navButton: {
    marginTop: 15,
  },
  navButtonText: {
    fontSize: 18,
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

export default Signup