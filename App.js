import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react'; 
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
  Keyboard
  
} from 'react-native';
import { Header } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';

// import Geolocation from './components/geolocation'
import City from './components/city'
import axios from 'axios';
export default function App() {



  return (
    <SafeAreaProvider style={{backgroundColor:'lightblue'}}>
      <Header
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'Ride the Duck 🦆', style: { color: '#fff', fontWeight:'bold' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
      />
      <City />
      <View style={styles.containerStyle}>
        <Text style={{ padding:10, fontSize: 12, fontWeight:'bold'}}>Top 10 places to visit</Text>
      </View>
      <View style={styles.containerStyle} >
        <Text style={{ padding:10, fontSize: 12, fontWeight:'bold' }}>Top 10 places to eat</Text>
      </View>
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
    marginBottom: 10,
    marginRight: 15,
    marginLeft: 15,
    backgroundColor: '#fff',
    borderRadius:10
    // shadowOffset:{  width: 10,  height: 10,  },
    //   shadowColor: 'grey',
    //   shadowOpacity: 0.5,
    //   borderWidth: 1,
    //   marginTop: 20,
    //   marginLeft: 20,
    //   marginRight: 20,
    //   borderRadius:10,
  },

});
