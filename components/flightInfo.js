import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, Linking } from "react-native"

const FlightInfo = ({ result }) => {
  return (
    <View>
      <Text>✈️</Text>
      <Text>From: {result.cityFrom}, {result.countryFrom}</Text>
      <Text>To: {result.cityTo}, {result.countryTo}</Text>
      <Text>Date: {result.flightDate}</Text>
      <Text>Duration: {result.flightDuration}</Text>
      <Text>{result.currency} {result.price}</Text>
      <Text style={{color: 'blue'}} onPress={()=> Linking.openURL(`${result.link}`)}>Check out the flight</Text>
    </View>
  )

};

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 120,
    borderRadius: 10
  }
})

export default FlightInfo;