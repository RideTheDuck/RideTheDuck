import React from 'react';
import { View, StyleSheet, FlatList, Text } from "react-native"
import CityInfo from "./cityInfo"
import useCity from "./hooks/useCity"
import { SvgUri } from 'react-native-svg';

const CityInfoList = ({ results }) => {
  console.log("resultsCity")
  console.log(results.name)
  console.log("resultsCity END")
  return (
    <View>
      <Text>{results.name}</Text>
      {/* <Text>{results.timezones}</Text>
      <Text>{results.currencies.code}</Text>
      <Text>{results.languages.name}</Text> */}
      <Text>{results.capital}</Text>
      <SvgUri
            width="50%"
            height="50%"
            uri={`${results.flag}`}
          />
      {/* <FlatList
        vertical
        data={resultsCity}
        keyExtractor={(resultCity) => resultCity.name}
        // renderItem={({ item }) => {
        //   return <CityInfo result={item}/>;
        // }}
      /> */}
    </View>
  )

};

const styles = StyleSheet.create({})

export default CityInfoList;