import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, Linking } from "react-native"

const FlightInfo = ({ result }) => {
  return (
    <View style={styles.card}>
      <View style={styles.container}>
        <Text style={{marginBottom: 5}}>✈️</Text>
        <Text style={{marginBottom: 5}}>From: {result.cityFrom}, {result.countryFrom}</Text>
        <Text style={{marginBottom: 5}}>To: {result.cityTo}, {result.countryTo}</Text>
        <Text style={{marginBottom: 5}}>Date: {result.flightDate}</Text>
        <Text style={{marginBottom: 5}}>Duration: {result.flightDuration}</Text>
        <Text style={{marginBottom: 5}}>{result.currency} {result.price}</Text>
        <Text style={{ color: 'blue' }} onPress={() => Linking.openURL(`${result.link}`)}>Check out the flight</Text>
      </View>
    </View>
  )

};

const styles = StyleSheet.create({
  card: {
    margin: 20,
    marginTop: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  container: {
    padding: 20,
    backgroundColor:'#fff',
  }
})

export default FlightInfo;