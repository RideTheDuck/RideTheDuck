import React from 'react';
import { View, StyleSheet, FlatList, Text, Image } from "react-native"
// import WeatherInfo from "./weatherInfo"


const WeatherList = ({ results }) => {
  let temp = results["main"]["temp"]
  console.log(typeof(temp))
    // console.log("this", results)
    console.log("lenght")
  return (
      <View >
      <Text>{results["name"]}</Text>
      {temp === undefined ? <Text>Temperature: 20 °C</Text> : <Text>Temperature: {temp} °C</Text>}
        {/* <Text style={{ padding:10, fontSize: 12, fontWeight:'bold' }}>Weather</Text> */}
        {/* <Text>Temperature: {results["main"]["temp"]} °C</Text> */}
        {/* <Text>Outlook: {results.weather}</Text>
        <Image source={{
            width: 80,
            height: 80,
            uri: `http://openweathermap.org/img/w/${results.icon}.png` 
        }} /> */}
       {/* <Text>Results: {results.languages[0].nativeName}</Text>    */}
      <FlatList
        vertical
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          console.log(item)
            // return <WeatherInfo result={item}/>
        }}
      />
    </View> 
  )

};

const styles = StyleSheet.create({
  title: {
    marginLeft:10,
    fontSize: 30,
    fontWeight:"bold"
  }
})

export default WeatherList;