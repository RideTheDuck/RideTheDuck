import React from 'react';
import { View, StyleSheet, FlatList, Text } from "react-native"
import CityInfo from "./cityInfo"
import useCity from "./hooks/useCity"
import { SvgUri } from 'react-native-svg';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import Fx from "./fx"


const CityInfoList = ({ results }) => {
  console.log(results.flag)
  return (
    <View style={{}}>
      <Text>{results.name}</Text>
      <Text>{results.languages[0].name}</Text>
      <Text>{results.timezones[0]}</Text>
      <Text>{results.currencies[0].code}</Text>
      <Text>{results.capital}</Text>
      <Text>{results.latlng[0]}</Text>
      <Text>{results.latlng[1]}</Text>
      <SvgUri
        width="200"
        height="100"
        resizeMode='cover'
        uri={`${results.flag}`}
      />
      {/* </View>
    <View style={styles.container}> */}
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
      <Fx Dest={results.currencies[0].code}/>
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


export default CityInfoList;