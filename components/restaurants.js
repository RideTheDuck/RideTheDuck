import React, { useState} from 'react';
import { View, Text, Stylesheet } from 'react-native';
import Search from "./search"
import RestaurantList from "./restaurantList"
import CityInfoList from "./cityInfoList"
import useRestaurants from "./hooks/useRestaurants"
import useCity from"./hooks/useCity"

const Restaurants = () => {

  const [location, setLocation] = useState('')
  console.log(location)
  const [searchApi, results, errorMessage] = useRestaurants();
  const [searchApiCity, resultsCity, errorMessageCity] = useCity();
  console.log("PRINTING THIS")
  console.log(resultsCity)
  console.log("PRINTING END")
  const filterByRating = (rate) => {
    return results.filter(result => {
      return result.rating >= rate
    })
  }

  return (
    <View>
      <Search location={location} onLocationChange={setLocation} onLocationSubmit={() => { searchApi(location); searchApiCity(location)}} />
      
      {errorMessage ? <Text>{results.length} Restaurants found</Text> : null}
      <RestaurantList results={filterByRating(4)} title="Best Restaurants" />
      
      <CityInfoList results={resultsCity} title="About" />
      {errorMessageCity ? <Text>{resultsCity.length} City found</Text> : null}
    </View>
    
  );
  
}
export default Restaurants;