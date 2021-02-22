import React, { useState} from 'react';
import { ScrollView, Button} from 'react-native';
import Search from "./search"
import RestaurantList from "./restaurantList"
import LandmarksList from "./landmarksList"
import FlightsList from "./flightsList"
import useRestaurants from "./hooks/useRestaurants"
import useLandmark from "./hooks/useLandmark"
import useFlight from "./hooks/useFlight"
import useCity from "./hooks/useCity"
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HotelList from "./hotelList"
import CityList from "./cityList"
import useHotel from "./hooks/useHotel"

const RenderComponent = ({navigation}) => {
  const [location, setLocation] = useState('')
  const [searchApi, results, errorMessage] = useRestaurants();
  const [searchApiCity, resultsCity, errorMessageCity] = useCity();
  const [searchApiLandmark, resultsLandmark, errorMessageLandmark] = useLandmark();
  const [searchApiFlight, resultsFlight, errorMessageFlight] = useFlight();
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
      <Search location={location} onLocationChange={setLocation} onLocationSubmit={() => { searchApi(location); searchApiCity(location); searchApiLandmark(location); ; searchApiHotel(location); searchApiFlight(location) }} />
    
      <ScrollView>
        {errorMessageCity ? <CityList results={resultsCity} /> : null}
        
        {errorMessage ? <RestaurantList results={filterByRating(4.5)} title="Restaurants" /> : null}
        
        {errorMessageLandmark ? <LandmarksList results={filterByRatingLandmark(4.5)} title="Landmarks" /> : null}

        {errorMessageHotel ? <HotelList results={filterByRatingHotel(4.5)} title="Hotels" /> : null}
  
        <Button 
          title='Check Flights' onPress={()=> {
            navigation.navigate('Flights', {
              results: resultsFlight
            })
          }} />
      </ScrollView>
    </> 
  );
}

const Stack =  createStackNavigator();

export default function StackView() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={RenderComponent}/>
        <Stack.Screen name="Flights" component={FlightsList}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}