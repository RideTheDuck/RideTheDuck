import React from 'react';
import { View, Text, Image } from "react-native"
import Fx from "./fx"
import Icon from 'react-native-vector-icons/FontAwesome';
const city = require('../style/city');

const WeatherInfo = ({ result }) => {
  console.log("here")
  console.log(result)
  return (
    <View style={city.container}>
      <Text>it's me'</Text>
        {/* <Text>{result.name}</Text>
        <Text style={{ padding:10, fontSize: 12, fontWeight:'bold' }}>Weather</Text>
        <Text>Temperature: {result.temp} °C</Text>
        <Text>Outlook: {result.weather}</Text>
        <Image source={{
            width: 80,
            height: 80,
            uri: `http://openweathermap.org/img/w/${result.icon}.png` 
        }} /> */}
      {/* <View style={city.title}>
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
           <Weather cityName={result.capital}/>
        </View>
      </View> */}
      {/* <View>
        <Fx Dest={result.currencies[0].code} />
      </View> */}
    </View >
  )
};

export default WeatherInfo;