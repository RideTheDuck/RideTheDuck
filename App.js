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
    <City style={{flex:1}}/>
    <View style={{flex:1}} ><Text>Top 10 places to visit</Text></View>
    <View style={{flex:1}} ><Text>Top 10 places to eat</Text></View>
      
      </SafeAreaProvider>
  )   
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
