import React from 'react';
import { View, StyleSheet, FlatList, Text, FlatView } from "react-native"  
import CityInformation from "./cityInformation" 

const city = require('../style/city'); 

const CityList = ({ results }) => {

  return ( 
    <View >
      <FlatList  
      // FaltList --> FaltView
        vertical
        showsHorizontalScrollIndicator={false}
        data={results}
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