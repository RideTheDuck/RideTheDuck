import React, { useState} from 'react';
import { View, Text, Stylesheet, ScrollView} from 'react-native';
import Search from "./search"
import RestaurantList from "./restaurantList"
import LandmarksList from "./landmarksList"
import HotelList from "./hotelList"
import CityList from "./cityList"
// import CityInformation from "./cityInformation"
import useRestaurants from "./hooks/useRestaurants"
import useLandmark from "./hooks/useLandmark"
import useHotel from "./hooks/useHotel"
import useCity from"./hooks/useCity"

const RenderComponents = () => {

  const [location, setLocation] = useState('')
  const [searchApi, results, errorMessage] = useRestaurants();
  const [searchApiCity, resultsCity, errorMessageCity] = useCity();
  const [searchApiLandmark, resultsLandmark, errorMessageLandmark] = useLandmark();
  const [searchApiHotel, resultsHotel, errorMessageHotel] = useHotel();
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

  const filterByRatingHotel = (rate) => {
    return resultsHotel.filter(result => {
      return result.rating >= rate
    })
  }

  return (
    <>
    <Search location={location} onLocationChange={setLocation} onLocationSubmit={() => { searchApi(location); searchApiCity(location); searchApiLandmark(location) }} />
    
      <ScrollView>
        {errorMessageCity ? <CityList results={resultsCity} /> : null}
        
        {errorMessage ? <RestaurantList results={filterByRating(4.5)} title="Best Restaurants" /> : null}
        
        {errorMessageLandmark ? <LandmarksList results={filterByRatingLandmark(4.5)} title="Best Places" /> : null}

        {errorMessageHotel ? <HotelList results={filterByRatingHotel(4.5)} title="Best Hotels" /> : null}
    </ScrollView>
   </> 
  );
  
}
export default RenderComponents;