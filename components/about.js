import React from 'react';
import { View, StyleSheet, FlatList, Text } from "react-native"

const About = ({navigation}) => {
  return (
      <View >
      <Text>About</Text>
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

export default About;