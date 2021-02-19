import React from 'react';
import { View, StyleSheet, FlatList } from "react-native"
import LandmarkInfo from "./landmarkInfo"

const LandmarksList = ({ results }) => {
  return (
    <View>
      <FlatList
        horizontal
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return <LandmarkInfo result={item}/>;
        }}
      />
    </View>
  )

};

const styles = StyleSheet.create({})

export default LandmarksList;