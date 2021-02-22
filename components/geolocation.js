import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Geocoder from 'react-native-geocoder';
import * as Location from 'expo-location'
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';

const ApiKey = 'arSCwv1eNIGH7G8-R7goOwlCy-GSr8v3HU3FoTHRlJc'

export default class UserLocation extends Component {
  state = {
    userCity: 'London',
    userCountry: 'UK',
    error:null
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        console.log('before')
        console.log(position.coords.latitude)
        console.log(position.coords.longitude)
        this.fetchUserLocation(position.coords.latitude, position.coords.longitude)
        
      }, 
      error => {
        this.setState({
          error: 'Error getting the user location'
        })
      }
    )
  }

  fetchUserLocation(lat, lon) {
    fetch(
      `https://reverse.geocoder.ls.hereapi.com/6.2/reversegeocode.json?apiKey=${ApiKey}&mode=retrieveAddresses&mode=retrieveAddresses&prox=${lat},${lon}`
    )
    .then(res => res.json())
    .then(json => {
      this.setState({
        userCity: json.Response.View[0].Result[0].Location.Address.City,
        userCountryCode: json.Response.View[0].Result[0].Location.Address.Country,
        userCountryName: json.Response.View[0].Result[0].Location.Address.AdditionalData[0].value,
      })
      console.log(this.state.userCity)
      console.log(this.state.userCountryCode)
      console.log(this.state.userCountryName)
    })
  }

  render() {
    console.log(this.state.location)
		return (
        <Text style={{fontSize: 20, marginBottom: 20}}>📍Current Location: {this.state.userCity}</Text>
    );
	}
}
