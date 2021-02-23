import React from 'react'
import {
  SafeAreaView,
  Text,
  Image,
} from 'react-native'
import axios from 'axios';

export default class Weather extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      temp: '',
      weather: '',
      icon: '',
      cityName: 'London'
    }
    this.handleSubmit(this.props.cityName)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.cityName !== this.props.cityName) {
      console.log('location has changed!!')
      this.setState({
        cityName: this.props.cityName
      })
      this.handleSubmit(this.props.cityName)
    }
  }
  
  handleSubmit = (cityName) => {
    const apiKey = '9ec9591a31e3be7446a43513c920d793'
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`)
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
    // this.handleSubmit()
    console.log("rendering")
    return(
      <SafeAreaView>
      <Text>{this.cityName}</Text>
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


