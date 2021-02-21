import React, { useState} from 'react';
import { View, Text, Stylesheet, ScrollView} from 'react-native';
import Search from "./search"
import RestaurantList from "./restaurantList"
import LandmarksList from "./landmarksList"
import CityInformation from "./cityInformation"
import FlightsList from "./flightsList"
import useRestaurants from "./hooks/useRestaurants"
import useLandmark from "./hooks/useLandmark"
import useFlight from "./hooks/useFlight"
import useCity from"./hooks/useCity"
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const RenderComponents = ({navigation}) => {

  const [location, setLocation] = useState('')
  const [searchApi, results, errorMessage] = useRestaurants();
  const [searchApiCity, resultsCity, errorMessageCity] = useCity();
  const [searchApiLandmark, resultsLandmark, errorMessageLandmark] = useLandmark();
  const [searchApiFlight, resultsFlight, errorMessageFlight] = useFlight();
  // console.log(results)
  const filterByRating = (rate) => {
    return results.filter(result => {
      return result.rating >= rate
    })
  }
  const filterByRatingLandmark = (rate) => {
    return resultsLandmark.filter(result => {
      return result.rating >= rate
    })
  }

  return (
    <ScrollView>
      <Search location={location} onLocationChange={setLocation} onLocationSubmit={() => { searchApi(location); searchApiCity(location); searchApiLandmark(location); searchApiFlight(location)}} />

      {errorMessage ? <Text>{resultsFlight.length} Flights found</Text> : null}
      <FlightsList results={resultsFlight} title="Best Flights" />
      
      {errorMessage ? <Text>{results.length} Restaurants found</Text> : null}
      <RestaurantList results={filterByRating(4)} title="Best Restaurants" />
      
      <CityInformation results={resultsCity} title="About" />
      {errorMessageCity ? <Text>{resultsCity.length} City found</Text> : null}

      {errorMessageLandmark ? <Text>{resultsLandmark.length} Landmarks found</Text> : null}
      <LandmarksList results={filterByRatingLandmark(4)} title="Best Places" />
      
    </ScrollView>
    
  );
  
}
export default RenderComponents;