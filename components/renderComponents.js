import React, { Component, useState } from 'react';
import { ScrollView, Button, Modal, View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import Search from "./search" 
import Advisory from "./advisory"
import RestaurantList from "./restaurantList"
import LandmarksList from "./landmarksList"
import FlightsList from "./flightsList"
import LoginScreen from './User/LoginScreen'
import SignupScreen from './User/SignupScreen'
import useRestaurants from "./hooks/useRestaurants"
import useLandmark from "./hooks/useLandmark"
import useFlight from "./hooks/useFlight"
import useCity from "./hooks/useCity"
import 'react-native-gesture-handler';
import HotelList from "./hotelList"
import CityList from "./cityList"
import useHotel from "./hooks/useHotel"

const RenderComponent = ({ navigation }) => {
  const styles = require('../style/card');
  const flight = require('../style/flight');

  const [location, setLocation] = useState('')
  const [searchApi, results, errorMessage] = useRestaurants();
  const [searchApiCity, resultsCity, errorMessageCity] = useCity();
  const [searchApiLandmark, resultsLandmark, errorMessageLandmark] = useLandmark();
  const [searchApiFlight, resultsFlight, errorMessageFlight] = useFlight();
  const [searchApiHotel, resultsHotel, errorMessageHotel] = useHotel();
  const [modalVisible, setModalVisible] = useState(false);

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
      <Search location={location} onLocationChange={setLocation} onLocationSubmit={() => { searchApi(location); searchApiCity(location); searchApiLandmark(location);; searchApiHotel(location); searchApiFlight(location) }} />

      

      <ScrollView> 

        {errorMessageCity ? <CityList results={resultsCity} /> : null}
        

        {errorMessage ? <RestaurantList results={filterByRating(4.5)} title="Restaurants" /> : null} 
        
        {errorMessageLandmark ? <LandmarksList results={filterByRatingLandmark(4.5)} title="Landmarks" /> : null}

        {errorMessageHotel ? <HotelList results={filterByRatingHotel(4.5)} title="Hotels" /> : null}
  

        <Button style={{ backgroundColor: '#faab18', alignSelf: 'center', padding: 10, paddingLeft: 15, paddingRight: 15, borderRadius: 100, width: '50%', alignItems: 'center' }} title = 'Check Flights' onPress={() => setModalVisible(true)}/>
        
        <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={() => {setModalVisible(!modalVisible)}} >
          <View style={modal.modalContainer}>
            <View style={modal.modalView}>
              <Button  title = 'Close' style={modal.closeModal} onPress={() => setModalVisible (!modalVisible)} />
              <View style={modal.flights} showsVerticalScrollIndicator={false}>
                < FlightsList results={resultsFlight }/>
              </View>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </>
  );
}

const modal = StyleSheet.create({
  modalContainer: {
    flex: 1,
    display: "flex",
    flexDirection:"column",
  },
  modalView: {
    flex:1,
    width: "100%",
    display: "flex",
    flexDirection:"column",
    backgroundColor: "white",
    borderRadius: 0,
    paddingTop:50,
    paddingHorizontal: 10,
    backgroundColor: "white",
  },
  closeModal: {
    marginTop:150,
    borderRadius: 20
  },
  flights: {
   paddingBottom:100
  }
});

export default RenderComponent;

