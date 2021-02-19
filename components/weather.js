import React from 'react'
import {
  View,
  SafeAreaView,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput
} from 'react-native'
import axios from 'axios';

export default class Weather extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      temp: '',
      weather: '',
      icon: ''
    }
  }
  
  handleSubmit = () => {
    const cityName = 'Seoul';
    const apiKey = 'bda085d769a5bc16c98a5824b1d0b2ca'
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`)
      .then(res => {
        // console.log(res.data.main.temp)
        // console.log(res.data.weather[0].main)
        // console.log(res.data.weather[0].icon)
        this.setState( {
          temp: res.data.main.temp,
          weather: res.data.weather[0].main,
          icon: res.data.weather[0].icon
        })

        })
  }

  render() {
    this.handleSubmit()
    return(
      <SafeAreaView>
      <Text style={{ padding:10, fontSize: 12, fontWeight:'bold' }}>Weather</Text>
      <Text>Temperature: {this.state.temp}°C</Text>
      <Text>Outlook: {this.state.weather}</Text>
      <Image source={{
        width: 80,
        height: 80,
        uri: `http://openweathermap.org/img/w/${this.state.icon}.png` 
      }} />
      </SafeAreaView>
    )
  }
}


