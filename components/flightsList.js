import React from 'react';
import { View, StyleSheet, FlatList } from "react-native"
import FlightInfo from "./flightInfo"

const FlightsList = ({ results }) => {
  return (
    <View>
      <FlatList
        horizontal
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