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
    <City/>
      
      </SafeAreaProvider>
  )   
}


// export default function App() {
//   return (
    
//     <View style={styles.container}>
      
      
//       <Text>Hello Ducks!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
