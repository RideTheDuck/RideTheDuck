import React, { Component } from 'react';
import axios from 'axios';
import { View, Text, TextInput, Linking } from 'react-native';
import moment from 'moment';

let date = new Date()
export default class Flights extends Component {
  constructor(props) {
    super(props)
    this.state = {
      keyword: '',
      cityFromCode: 'LON',
      cityToCode: 'MEX',
      cityFrom: '',
      countryFrom: '',
      cityTo: '',
      CountyTo: '',
      flightTime: '',
      flightDuration: '',
      price: '',
      flightDate: '',
      link: '',
      dateFrom: moment(new Date()).format("DD/MM/YYYY"),
      dateTo: moment().add(3, 'months').format('DD/MM/YYYY'),
      numOfFlights: 5,
      flights: []
    }
  }

  searchDepartureCityCode = () => {
    let city = 'London'
    axios
      .get(`https://api.skypicker.com/locations?term=${city}&locale=en-US&location_types=airport&limit=10&active_only=true&sort=name`)
      .then((response) => {
        // response.data.locations[0].alternative_departure_points.forEach(item => {airports.push(item.id)} )
        // console.log(airports)
        // console.log(response.data.locations[0].city.code)
        this.setState({
          cityFromCode: response.data.locations[0].city.code
        })
        // console.log(this.state.cityFromCode)
      })
      .catch(err => console.log(err))
  }

  searchLandingCityCode = () => {
    let city = 'Seoul'
    axios
      .get(`https://api.skypicker.com/locations?term=${city}&locale=en-US&location_types=airport&limit=10&active_only=true&sort=name`)
      .then((response) => {
        // response.data.locations[0].alternative_departure_points.forEach(item => {airports.push(item.id)} )
        // console.log(airports)
        // console.log(response.data.locations[0].city.code)
        this.setState({
          cityToCode: response.data.locations[0].city.code
        })
        // console.log('city to code')
        // console.log(this.state.cityToCode)
      })
      .catch(err => console.log(err))
  }

  searchFlights = () => {
    axios
      .get(`https://api.skypicker.com/flights?fly_from=${this.state.cityFromCode}&fly_to=${this.state.cityToCode}&dateFrom=${this.state.dateFrom}&dateTo=${this.state.dateTo}&sort=duration&limit=${this.state.numOfFlights}&partner=picky&v=3`)
      .then((response) => {
        let flightsArray = []
        let data = response.data.data
        for (let i = 0; i < data.length; i++) {
          flightsArray.push({
            cityFrom: data[i].cityFrom,
            countryFrom: data[i].countryFrom.name,
            cityTo: data[i].cityTo,
            countryTo: data[i].countryTo.name,
            flightDuration: data[i].fly_duration,
            currency: Object.keys(data[i].conversion)[0],
            price: Object.values(data[i].conversion)[0],
            flightDate: moment(new Date(data[i].aTime * 1000)).format('LLLL'),
            link: data[i].deep_link
          })
        }
        this.setState({
          flights: flightsArray
        })

      })
      .catch(err => console.log('error!'))
  }

  componentDidMount() {
    this.searchDepartureCityCode()
    this.searchLandingCityCode()
    this.searchFlights()
  }

  // componentDidUpdate(prevProps) {
  //   const [, ]
  //   this.searchDepartureCityCode()
  //   this.searchLandingCityCode()
  //   this.searchFlights()
  // }
  render() {
    // this.searchDepartureCityCode();
    // this.searchLandingCityCode();
    // this.searchFlights();
    return (
      <View style={{padding: 20}}>
        {this.state.flights.map((flight,index) => (
          <View key={index} style={{borderWidth: 1, borderColor:'black', margin: 10}}>
          <Text>From: {flight.cityFrom}, {flight.countryFrom}</Text>
          <Text>To: {flight.cityTo}, {flight.countryTo}</Text>
          <Text>Date: {flight.flightDate}</Text>

          <Text>Duration: {flight.flightDuration}</Text>
          <Text>{flight.currency}{flight.price}</Text>
          <Text style={{color: 'blue'}} onPress={()=> Linking.openURL(`${flight.link}`)}>Check out the flight</Text>
          </View>
        ))}
      </View>
      )
  }
}
