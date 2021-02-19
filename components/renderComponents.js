import React, { useState} from 'react';
import { View, Text, Stylesheet } from 'react-native';
import Search from "./search"
import RestaurantList from "./restaurantList"
import LandmarksList from "./landmarksList"
import CityInformation from "./cityInformation"
import useRestaurants from "./hooks/useRestaurants"
import useLandmark from "./hooks/useLandmark"
import useCity from"./hooks/useCity"

const RenderComponents = () => {

  const [location, setLocation] = useState('')
  const [searchApi, results, errorMessage] = useRestaurants();
  const [searchApiCity, resultsCity, errorMessageCity] = useCity();
  const [searchApiLandmark, resultsLandmark, errorMessageLandmark] = useLandmark();
  console.log(results)
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
    <View>
      <Search location={location} onLocationChange={setLocation} onLocationSubmit={() => { searchApi(location); searchApiCity(location); searchApiLandmark(location)}} />
      
      {errorMessage ? <Text>{results.length} Restaurants found</Text> : null}
      <RestaurantList results={filterByRating(4)} title="Best Restaurants" />
      
      <CityInformation results={resultsCity} title="About" />
      {errorMessageCity ? <Text>{resultsCity.length} City found</Text> : null}

      {errorMessageLandmark ? <Text>{resultsLandmark.length} Landmarks found</Text> : null}
      <LandmarksList results={filterByRatingLandmark(4)} title="Best Places" />
      
    </View>
    
  );
  
}
export default RenderComponents;