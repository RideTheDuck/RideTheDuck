import React, { Component, useState, useEffect } from 'react';
import { View, Text, Stylesheet } from 'react-native';
import Search from "./search"
import yelp from "../api/yelp";
import RestaurantList from "./restaurantList"

const Restaurants = () => {

  const [location, setLocation] = useState('')
  const [results, setResults] = useState([])
  const [errorMessage, setErrorMessage] = useState([])

  const filterByRating = (rate) => {
    return results.filter(result => {
      return result.rating >= rate
    })
  }

  const searchApi = async (defaultLocation) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 10,
          term: "restaurants",
          location: defaultLocation
        }
      });
      setResults(response.data.businesses)
      console.log(response.data.businesses)
    } catch (err) {
      setErrorMessage("Something went wrong");
    }
  };
  //Sets a default search value
  useEffect((defaultLocation) => {
    searchApi('London')
  }, [])

  return (
    <View>
      <Search location={location} onLocationChange={setLocation} onLocationSubmit={() => searchApi(defaultLocation)} />
      {errorMessage ? <Text>{results.length} Restaurants found</Text> : null}
      <RestaurantList results={filterByRating(4)} title="Best Restaurants" />
    </View>
  );
}
export default Restaurants;