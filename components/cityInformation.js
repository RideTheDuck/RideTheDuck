import React from 'react';
import { View, StyleSheet, FlatList, Text } from "react-native"
// import { Flag } from 'react-native-flagkit'
// import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
// import Fx from "./fx"


const CityInformation = ({ results }) => {

  return (
    <View style={{}}>
      {/* <Flag
        id={`${results.alpha2Code}`}
        width={100}
        height={100}
      />
      <Text>{results.name}</Text>
      <Text>{results.languages[0].name}</Text>
      <Text>{results.timezones[0]}</Text>
      <Text>{results.currencies[0].code}</Text>
      <Text>{results.capital}</Text>
      <Text>{results.latlng[0]}</Text>
      <Text>{results.latlng[1]}</Text>
      <Text>{results.flag}</Text>

      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: results.latlng[0],
          longitude: results.latlng[1],
          latitudeDelta: 20,
          longitudeDelta: 30,
        }}
      />
      <Fx Dest={results.currencies[0].code} /> */}
    </View >
  )

};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 10,
  },
  map: {
    width: 180,
    height: 150,
  },
  iconStyle: {
    fontSize: 20,
    color: "gray",
    alignSelf: "center",
    marginRight: 10
  },
  stretch: {
    width: 50,
    height: 200,
    resizeMode: 'stretch',
  },
});


export default CityInformation;