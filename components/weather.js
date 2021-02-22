import React from 'react'
import { SafeAreaView, Text, Image,  View } from 'react-native'
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';

const weather = require('../style/weather');

export default class Weather extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      temp: '',
      weather: '',
      icon: '',
      cityName: 'London'
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.cityName !== this.props.cityName) {
      console.log('location has changed!!')
      this.setState({
        cityName: this.props.cityName
      })
    }
  }
  
  handleSubmit = () => {
    const apiKey = 'bda085d769a5bc16c98a5824b1d0b2ca'
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.cityName}&units=metric&appid=${apiKey}`)
    .then(res => {
      this.setState( {
        temp: res.data.main.temp,
        weather: res.data.weather[0].main,
        icon: res.data.weather[0].icon
      })
    })
    // axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`)
    //   .then(res => {
    //     this.setState( {
    //       temp: res.data.main.temp,
    //       weather: res.data.weather[0].main,
    //       icon: res.data.weather[0].icon
    //     })
    // })
  }

  render() {
    this.handleSubmit()
    return(
        <View style={weather.container} >
            <Text style={weather.degrees}>20 {this.state.temp}°C</Text>
            <View style={weather.image} >
                <Icon name="cloud" style={weather.icon} />
                <Text style={weather.state}>cloud {this.state.weather}</Text>
            </View>
            <Text style={weather.text}>Overcast clouds</Text>
            <View style={weather.condition}>
                <Text style={weather.text}>Min: 1 °C</Text>
                <Text style={weather.text}>Max: 2 °C</Text>
            </View>
            <Text style={weather.text}>Feels like 8°C</Text>

        {/* <Image source={{
            width: 80,
            height: 80,
            uri: `http://openweathermap.org/img/w/${this.state.icon}.png` 
        }} /> */}
      </View>
    )
  }
}


