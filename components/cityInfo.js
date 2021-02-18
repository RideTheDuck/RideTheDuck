import React from 'react';
import { View, Text,Image, StyleSheet, FlatList } from "react-native"

const CityInfo = ({ result }) => {
  return (
    <View>
      <Text>{result.name}</Text>
    </View>
  )

};

const styles = StyleSheet.create({
  // image: {
  //   width: 250,
  //   height:120,
  //   borderRadius:10
  // }
})

export default CityInfo;