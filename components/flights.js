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
      dateTo: moment().add(3, 'months').format('DD/MM/YYYY')
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
      .get(`https://api.skypicker.com/flights?fly_from=${this.state.cityFromCode}&fly_to=${this.state.cityToCode}&dateFrom=${this.state.dateFrom}&dateTo=${this.state.dateTo}&partner=picky&v=3`)
      .then((response) => {
        console.log('fetch request was made')
        let data = response.data.data[0]
        console.log(data)
        console.log(Object.keys(data.conversion)[0])
        console.log(Object.values(data.conversion)[0])
        this.setState({
          cityFrom: data.cityFrom,
          countryFrom: data.countryFrom.name,
          cityTo: data.cityTo,
          countryTo: data.countryTo.name,
          flightDuration: data.fly_duration,
          currency: Object.keys(data.conversion)[0],
          price: Object.values(data.conversion)[0],
          flightDate: moment(new Date(response.data.data[0].aTime * 1000)).format('LLLL'),
          link: data.deep_link
        })
        console.log(this.state.countryTo)
        
        // console.log(`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`)
        // console.log(moment().format())
        
        // console.log(moment(new Date()).format("YYYY-MM-DD hh:mm:ss"))
        // console.log('today')
        // let today = moment(new Date()).format("YYYY/MM/DD")
        // console.log(today)
        // console.log('3 months after')
        // console.log(moment().add(3, 'months').format('YYYY/MM/DD'))
        // console.log('flight time')
        // let flight = moment(new Date(response.data.data[0].aTime * 1000)).format("YYYY-MM-DD hh:mm")
        // console.log(flight)

        // console.log(response.data.data[0].cityFrom)
        // console.log(response.data.data[0].countryFrom.name)
        // console.log(response.data.data[0].cityTo)
        // console.log(response.data.data[0].countryTo.name)
        // console.log(response.data.data[0].fly_duration)
        // console.log(response.data.data[0].conversion)
        // // console.log(new Date(response.data.data[0].aTime * 1000).toLocaleDateString("en-US"))
        // console.log(response.data.data[0].deep_link)

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
        <Text style={{fontSize: 20, fontWeight:'bold'}}>✈️ Flight</Text>

          <Text>From: {this.state.cityFrom}, {this.state.countryFrom}</Text>
          <Text>To: {this.state.cityTo}, {this.state.countryTo}</Text>
        <Text>Date: {this.state.flightDate}</Text>

        <Text>Flight duration: {this.state.flightDuration}</Text>
      <Text>Price: {this.state.currency} {this.state.price}</Text>
      <Text style={{color:'blue'}} onPress={()=> Linking.openURL(`${this.state.link}`)}>Check out the flight</Text>
      {/* <Text>{this.state.dateFrom}</Text>
      <Text>{this.state.dateTo}</Text> */}
      </View>
      )
    // countryFrom: '',
    // cityTo: '',
    // CountyTo: '',
    // flightTime: '',
    // flightDuration: '',
    // price: '',
    // flightDate: '',
    // link: '',
    // dateFrom: moment(new Date()).format("YYYY/MM/DD"),
    // dateTo: console.log(moment().add(3, 'months').format('YYYY/MM/DD'))}</Text>
  }
}

