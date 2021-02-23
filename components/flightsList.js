import React from 'react';
import { View, StyleSheet, FlatList, Button, Text } from "react-native"
import FlightInfo from "./flightInfo"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';



const FlightsList = ({ results }) => {

  return (
    <View>
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