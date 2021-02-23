import React from 'react';
import { View, StyleSheet, FlatList, Text } from "react-native"
import CityInformation from "./cityInformation"

const CityList = ({ results }) => {

  return (
      <View >
       {/* <Text>Results: {results.languages[0].nativeName}</Text>    */}
      <FlatList
        vertical
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result[0]}
        renderItem={({item}) => {
            return <CityInformation result={item}/>
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

export default CityList;