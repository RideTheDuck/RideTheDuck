import React from 'react';
import { View, Text,Image, StyleSheet, FlatList } from "react-native"

const RestaurantInfo = ({ result }) => {
  return (
    <View>
      <Image style={styles.image} source={{uri:result.image_url}}/>
      <Text>{result.name}</Text>
      <Text>{result.rating}</Text>
    </View>
  )

};

const styles = StyleSheet.create({
  image: {
    width: 250,
    height:120,
    borderRadius:10
  }
})

export default RestaurantInfo;