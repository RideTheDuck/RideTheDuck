import React from 'react'
import { SafeAreaView, Text, Image,  View } from 'react-native'
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';
import advisory from "../api/advisory"
const weather = require('../style/weather');


export default class Weather extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      temp: '',
      weather: '',
      icon: '',
      cityName: 'London',
      alphaCode: "GB",
      message:""
    }
    this.handleSubmit(this.props.cityName)
    this.searchApiAdv(this.props.alphaCode)
  }
  
  componentDidUpdate(prevProps) {
    if (prevProps.cityName !== this.props.cityName) {
      console.log('location has changed!!')
      this.setState({
        cityName: this.props.cityName,
        alphaCode: this.props.alphaCode
      })
      this.handleSubmit(this.props.cityName)
      this.searchApiAdv(this.props.alphaCode)
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
  }
  
  searchApiAdv = (alphaCode) => {
    try {
      fetch(`https://www.travel-advisory.info/api?countrycode=${this.props.alphaCode}`)
        
        .then(response => 
          response.json().then(data => ({
            data: data,
            status: response.status
          })).then(res => {
            let messg = res.data.data[`${this.props.alphaCode}`]
            this.setState({
              message: messg.advisory.message
            })
            console.log("message",res.data.data.GB.advisory.message)
          }));
    } catch (err) {
      console.log("Something went wrong");
    }
  };
  render() {
    console.log("this=>",this.props.alphaCode)
    return(
      <View style={weather.container} >
        <Text>{this.state.message}</Text>
            <Text style={weather.degrees}>{this.state.temp}°C</Text>
            
            <View style={weather.image} >
              < Image style = { weather.icon }
                source = {
                  {
                    width: 80,
                    height: 80,
                    uri: `http://openweathermap.org/img/w/${this.state.icon}.png`
                  }
                }
                />
            <Text style={weather.state}>{this.state.weather}</Text>
            </View>
            <Text style={weather.text}>Overcast clouds</Text>
            <View style={weather.condition}>
                <Text style={weather.text}>Min: 1 °C</Text>
                <Text style={weather.text}>Max: 2 °C</Text>
            </View>
            <Text style={weather.text}>Feels like 8°C</Text>
      </View>
    )
  }
}


