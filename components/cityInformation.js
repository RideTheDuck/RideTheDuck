import React from 'react';
import { View, StyleSheet, FlatList, Text } from "react-native"
import { Flag } from 'react-native-flagkit'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import Fx from "./fx"


const CityInformation = ({ result }) => {

  return (
    <View style={city.container}>
      <View style={city.title}>
        <Flag
          id={`${result.alpha2Code}`}
          width={30}
          height={20}
        />
        <Text style={city.capital}>{result.capital}</Text>
      </View>  
      <Text>{result.name}</Text>
      <View style={city.highlights}>
        <Text>{result.languages[0].name}</Text>
        <Text>{result.timezones[0]}</Text>
        <Text>{result.currencies[0].code}</Text>
        <Text>{result.latlng[0]}</Text>
        <Text>{result.latlng[1]}</Text>
        <Text>{result.flag}</Text>
      </View>   
      <MapView
        style={city.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: result.latlng[0],
          longitude: result.latlng[1],
          latitudeDelta: 20,
          longitudeDelta: 30,
        }}
      />
      <Fx Dest={result.currencies[0].code} />
    </View >
  )

};

const city = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection:"column",
    marginHorizontal: 10,
  },
  title: {
    display: "flex",
    flexDirection: "row",
    alignItems:"center"
  },
  capital: {
    fontSize: 30,
    fontWeight:"bold",
    marginLeft:10
  },
  highlights: {
    display: "flex",
    flexDirection: "row",
  },


});


export default CityInformation;