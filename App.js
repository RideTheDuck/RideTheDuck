import React, { Component } from 'react'; 
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Flights from './components/flights'
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


function HomeScreen({ navigation }) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent:'center' }}>
      <Text style={{fontSize: 30}}>Home Screen</Text>
      <Button 
        title = "Check Flights"
        onPress={()=> navigation.navigate('Flights', {
          cityFrom: 'London',
          cityTo: 'Seoul'
        })}
        />
    </View>
  );
}


const Stack = createStackNavigator();

export default function App() {
  return (
    <>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Flights" component={Flights} 
        options={({route}) => ({title: '✈️  ' + route.params.cityFrom + ' to ' + route.params.cityTo})} />
      </Stack.Navigator>
      </NavigationContainer>
   
   </>
    
  )
}