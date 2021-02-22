import React, { Component } from 'react';
import UserGeoLocation from './geolocation'
import geocoder from "../../api/geocoder";
import { LayoutAnimation } from 'react-native';

export default () => {
  const [resultsUserLocation, setUserLocation] = useState([])
  const [errorMessageUserLocation, setErrorMessageUserLocation] = useState([])

  const searchApiUserLocation = async (latitutde, longitude) => {
    try {
      const responseCoordinates = await geocoder.get('', {
        params: {
          mode: retrieveAddresses,
          prox: latitutde,longitude
        }
      })
    }
  }
}

