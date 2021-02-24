import { StyleSheet, Text, View, TouchableOpacity, Image, Touchable, Component, TextInput } from 'react-native'
import FormButton from './FormButton'
import SocialButton from './SocialButton'
import React, { useContext, useState } from 'react';
import Firebase from '../config/Firebase'
import { AuthContext } from './AuthProvider';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { windowHeight, windowWidth } from '../Dimensions'



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
      .then(() => this.props.navigation.navigate('Login'))
      .catch(error => console.log(error))
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Create an account</Text>

        <View style={styles.inputContainer}>
          <View style={styles.iconStyle}>
            <Image source={require('../../assets/user.png')} style={{ width: 30, height: 30 }} />
          </View>
          <TextInput
            style={styles.input}
            onChangeText={name => this.setState({ name })}
            placeholder="Full Name"
            placeholderTextColor="#666"
            autoCapitalize='none'
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>

        <View style={styles.inputContainer}>
          <View style={styles.iconStyle}>
            <Image source={require('../../assets/email.png')} style={{ width: 30, height: 30 }} />
          </View>
          <TextInput
            style={styles.input}
            onChangeText={email => this.setState({ email })}
            placeholder="Email"
            placeholderTextColor="#666"
            autoCapitalize='none'
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>


      <View style={styles.inputContainer}>
          <View style={styles.iconStyle}>
            <Image source={require('../../assets/lock.png')} style={{ width: 30, height: 30 }} />
          </View>
          <TextInput
            style={styles.input}
            onChangeText={password => this.setState({ password })}
            placeholder="Password"
            placeholderTextColor="#666"
            autoCapitalize='none'
            secureTextEntry={true}
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>

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
  inputContainer: {
    marginTop: 5,
    marginBottom: 10,
    width: '100%',
    height: windowHeight / 15,
    borderColor: '#ccc',
    borderRadius: 3,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  iconStyle: {
    padding: 10,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightColor: '#ccc',
    borderRightWidth: 1,
    width: 50,
  },
  input: {
    padding: 10,
    flex: 1,
    fontSize: 16,
    // fontFamily: 'Lato-Regular',
    color: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputField: {
    padding: 10,
    marginTop: 5,
    marginBottom: 10,
    width: windowWidth / 1.5,
    height: windowHeight / 15,
    fontSize: 16,
    borderRadius: 8,
    borderWidth: 1,
  },
})

export default Signup