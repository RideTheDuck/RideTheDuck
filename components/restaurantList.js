import React from 'react';
import { View, StyleSheet, FlatList, Text } from "react-native"
import RestaurantInfo from "./restaurantInfo"

const RestaurantList = ({ results, title }) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return <RestaurantInfo result={item}/>;
        }}
      />
    </View>
  )

};

const styles = StyleSheet.create({
  title: {
    marginLeft:10,
    fontSize: 30,
    fontWeight:"bold"
  }
})
export default RestaurantList;