import React, { Component, useState, useEffect } from 'react';
import { View, Text, Stylesheet } from 'react-native';
import Search from "./search"
import yelp from "../api/yelp";
import RestaurantList from "./restaurantList"

const Restaurants = () => {

  const [location, setLocation] = useState('')
  const [results, setResults] = useState([])
  const [errorMessage, setErrorMessage] = useState([])

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
  useEffect(() => {
    searchApi('London')
  }, [])

  return (
    <View>
      <Search location={location} onLocationChange={setLocation} onLocationSubmit={() => searchApi(defaultLocation)} />
      {errorMessage ? <Text>{results.length}</Text> : null}
      <RestaurantList />
    </View>
  );
}
export default Restaurants;