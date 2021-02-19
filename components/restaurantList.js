import React from 'react';
import { View, StyleSheet, FlatList } from "react-native"
import RestaurantInfo from "./restaurantInfo"

const RestaurantList = ({ results }) => {
  return (
    <View>
      <FlatList
        horizontal
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return <RestaurantInfo result={item}/>;
        }}
      />
    </View>
  )

};

const styles = StyleSheet.create({})

export default RestaurantList;