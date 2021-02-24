import React from 'react';
import { View, Text, Image } from "react-native"
import { Flag } from 'react-native-flagkit'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import Fx from "./fx"
import Weather from "./weather"
import Icon from 'react-native-vector-icons/FontAwesome';
const city = require('../style/city');

let mapApi = "arSCwv1eNIGH7G8-R7goOwlCy-GSr8v3HU3FoTHRlJc"

const CityInformation = ({ result }) => {
  return (
    
    <View style={city.container}>
      
      <View style={city.title}>
        <Flag id={`${result.alpha2Code}`} width={30} height={20} />
        <Text style={city.capital}>{result.capital}</Text>
        <Text style={city.nativeName}>{result.nativeName}</Text>
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
            <Icon name="globe" style={city.icon}/> {result.subregion}
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
        <Image
          style={city.map}
         source = {
           {
             uri: `https://image.maps.ls.hereapi.com/mia/1.6/mapview?apiKey=${mapApi}&ci=${result.capital}&w=320&h=340&z=4
             `
           }
         }
        />
        <View style={city.weather}>
          
           <Weather cityName={result.capital} alphaCode={result.alpha2Code}/>
        </View>
      </View>
      <View>
        <Fx Dest={result.currencies[0].code} />
      </View>
    </View >
  )
};

export default CityInformation;