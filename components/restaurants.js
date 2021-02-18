import React, { Component, useState } from 'react';
import { View, Text, Stylesheet } from 'react-native';
import yelp from "../api/yelp";

const Restaurants = () => {
  const [term, setTerm] = useState('')
  const [results, setResults] = useState([])
  const searchApi = async () => {
    const response = await yelp.get("/search", {
      params: {
        limit: 10,
        term:"restaurants",
        location: "london"
      }
    });
    setResults(response.data.businesses)
  };
  return (
    <View style={{ width: 170, padding: 10 }}>
      <Text>{results.length}</Text>
    </View>
  );
}