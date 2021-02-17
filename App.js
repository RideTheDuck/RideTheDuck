import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  // SafeAreaView,
  TouchableWithoutFeedback,
  TouchableHighlight,
  Button,
  Alert,
  Image,
} from 'react-native';
import { Header } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// import Geolocation from './components/geolocation'
import City from './components/city'
import axios from 'axios';

export default function App(){
  
  return (
    <SafeAreaProvider>
    <Header
      leftComponent={{ icon: 'menu', color: '#fff' }}
      centerComponent={{ text: 'Ride the Duck 🦆', style: { color: '#fff' } }}
      rightComponent={{ icon: 'home', color: '#fff' }}
    />
    <City style={styles.containerStyle}/>
    <View style={styles.containerStyle}><Text>Top 10 places to visit</Text></View>
    <View style={styles.containerStyle} ><Text>Top 10 places to eat</Text></View>
      
      </SafeAreaProvider>
  )   
}


const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    // shadowOffset:{  width: 10,  height: 10,  },
    // shadowColor: 'grey',
    // shadowOpacity: 1.0,
    // borderWidth: 1,
    backgroundColor: 'gold',
    marginBottom: 20,
    marginRight: 20,
    marginLeft:20,
  }
});
