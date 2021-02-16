import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  SafeAreaView,
  TouchableWithoutFeedback,
  TouchableHighlight,
  Button,
  Alert,
  Image,
} from 'react-native';
import SearchBox from './components/searchbox'
import axios from 'axios';

export default function App(){
  
  return (
    <SafeAreaView style={styles.container}>
      <SearchBox />
    </SafeAreaView>
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
