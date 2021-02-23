import React, { Component, useState } from 'react';
import { ScrollView, Button, Modal, View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import Search from "./search"
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

        <Text style={modal.title}>Flights</Text>

        <View style={{ display: "flex", flexDirection: "row" }}>
          
          <TouchableOpacity style={modal.open} onPress={() => setModalVisible(true)} >
            <Text style={styles.infoTextButton}>Check Flights</Text>
          </TouchableOpacity>
        </View>
        <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={() => {setModalVisible(!modalVisible)}} >
          <View style={modal.modalContainer}>
            <View style={modal.modalView}>
              <Button  title = 'Close' style={modal.closeModal} onPress={() => setModalVisible (!modalVisible)} />
              <View style={modal.flights} showsVerticalScrollIndicator={false}>
                < FlightsList results={resultsFlight } / >
              </View>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </>
  );
}

const modal = StyleSheet.create({
  title: {
    marginLeft: 10,
    fontSize: 30,
    fontWeight: "bold",
    color: "gray"
  },
  open: {
    textAlign:"center",
    flex: 1,
    width: "50%",
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: "#faab18",
    marginHorizontal:10,
    marginTop: 10,
    marginBottom:60
  },
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

