import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from "react-native"

const LandmarkInfo = ({ result }) => {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <View style={styles.cardInfo}>
        <Text style={styles.name}>{result.name}</Text>
        <Text>{result.rating}</Text>
        <Text>{result.rating}</Text>
      </View>
    </View>
  )

};

const styles = StyleSheet.create({
  card: {
    margin: 10,
    borderRadius: 10
  },
  cardInfo: {
    backgroundColor: "#faab18",
    padding: 10,
    borderBottomRightRadius:10,
    borderBottomLeftRadius: 10
  },
  name: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom:10
  },
  image: {
    width: 250,
    height: 120,
    borderTopRightRadius:10,
    borderTopLeftRadius: 10
  }
})

export default LandmarkInfo;