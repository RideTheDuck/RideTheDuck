import React from 'react';
import { View, Text } from "react-native"
import { Flag } from 'react-native-flagkit'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import Fx from "./fx"
import Weather from "./weather"
import Icon from 'react-native-vector-icons/FontAwesome';
const city = require('../style/city');


const CityInformation = ({ result }) => {
  return (
    <View style={city.container}>
      <View style={city.title}>
        <Flag id={`${result.alpha2Code}`} width={30} height={20} />
        <Text style={city.capital}>{result.capital}</Text>
        <Text style={city.nativeName}>{result.nativeName}</Text>
      </View> 
      <View style={city.highlights}>
        <View style={city.badge}>
          <Text style={city.badgeText}>
            <Icon name="volume-up" style={city.icon}/> {result.languages[0].name}
          </Text>
        </View>
        <View style={city.badge}>
          <Text style={city.badgeText}>
            <Icon name="clock-o" style={city.icon}/> {result.timezones[0].slice(4)}
          </Text>
        </View>
        <View style={city.badge}>
          <Text style={city.badgeText}>
            <Icon name="dollar" style={city.icon}/> {result.currencies[0].code}
          </Text>
        </View>
        <Text></Text>
      </View>
      <View style={city.box}>
        <MapView
                style={city.map}
                provider={PROVIDER_GOOGLE}
                initialRegion={{
                  latitude: result.latlng[0],
                  longitude: result.latlng[1],
                  latitudeDelta: 10,
                  longitudeDelta: 20,
                }}
              />
        <View style={city.weather}>
           <Weather cityName={results.capital}/>
        </View>
      </View>
      <View>
        <Fx Dest={result.currencies[0].code} />
      </View>
    </View >
  )
};

export default CityInformation;