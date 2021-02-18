import React from 'react';
import { View, StyleSheet, FlatList, Text } from "react-native"
import CityInfo from "./cityInfo"

const CityInfoList = ({ results }) => {
  return (
    <View>
      <Text>{results} Results</Text>
      <FlatList
        vertical
        data={results}
        keyExtractor={(result) => result.name}
        renderItem={({ item }) => {
          return <CityInfo result={item}/>;
        }}
      />
    </View>
  )

};

const styles = StyleSheet.create({})

export default CityInfoList;