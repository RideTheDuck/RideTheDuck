import React from 'react';
import { View, StyleSheet, FlatList, Button, Text } from "react-native"
import FlightInfo from "./flightInfo"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';


const FlightsList = ({ route, navigation }) => {
  const { results } = route.params;
  console.log('flight list')
  console.log(results)
  return (
    <View>
      {/* <Button title="Go Back" onPress={() => navigation.navigate('Home')} /> */}
      {/* <Text style={{
        fontSize: 20, 
        alignSelf: 'center', 
        fontWeight: 'bold', 
        margin: 20
        }}>{results[0].cityFrom.toUpperCase()} to  {results[0].cityTo.toUpperCase()}</Text> */}
      <FlatList
        vertical
        data={results}
        keyExtractor={(result, index) => index}
        renderItem={({ item }) => {
          return <FlightInfo result={item}/>;
        }}
      />
    </View>
  )

};

const styles = StyleSheet.create({})

export default FlightsList;