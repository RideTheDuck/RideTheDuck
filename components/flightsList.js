import React from 'react';
import { View, StyleSheet, FlatList, Button } from "react-native"
import FlightInfo from "./flightInfo"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const FlightsList = ({ route, navigation }) => {
  const { results } = route.params;
  return (
    <View>
      <Button title="Go Back" onPress={() => navigation.navigate('Home')} />
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