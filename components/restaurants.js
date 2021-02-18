import React, { useState} from 'react';
import { View, Text, Stylesheet } from 'react-native';
import Search from "./search"
import RestaurantList from "./restaurantList"
import CityInfoList from "./cityInfoList"
import useRestaurants from"./hooks/useRestaurants"

const Restaurants = () => {

  const [location, setLocation] = useState('')
  console.log(location)
  const [searchApi, results, errorMessage] = useRestaurants();

  const filterByRating = (rate) => {
    return results.filter(result => {
      return result.rating >= rate
    })
  }

  return (
    <View>
      <Search location={location} onLocationChange={setLocation} onLocationSubmit={() => searchApi(location)} />
      
      {errorMessage ? <Text>{results.length} Restaurants found</Text> : null}
      <RestaurantList results={filterByRating(4)} title="Best Restaurants" />
      <CityInfoList title="About" />
    </View>
    
  );
  
}
export default Restaurants;