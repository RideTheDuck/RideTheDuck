import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, Linking, TouchableOpacity } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome';

const FlightInfo = ({ result }) => {
  return (
    <View style={styles.card}>

      <View style={styles.container}>
        <Text style={{ backgroundColor: '#faab18', padding: 3, fontWeight: 'bold', color:'white'}}>{result.airline}</Text>
        <View flexDirection="row" style={{justifyContent:'stretch'}}>
          <View style={{ padding:20, paddingRight: 0, alignItems: 'center', width: '80%'}}>
            <Text style={{ marginBottom: 5, fontSize: 24, alignSelf: 'center', fontWeight: 'bold', color: 'grey' }}> {result.airportFrom}   <Icon name="plane" style={{ fontSize: 30, color: '#faab18' }} />   {result.airportTo} </Text>
            <Text style={{ marginBottom: 5 }}><Icon name="calendar" />  {result.flightDate}</Text>
            <Text style={{ marginBottom: 5 }}><Icon name="clock-o" /> {result.flightDuration}</Text>
            <Text style={{ marginBottom: 5, fontWeight: 'bold' }}><Icon name="euro" /> {result.price}</Text>
            <TouchableOpacity style={{ backgroundColor: '#faab18', alignSelf: 'center', padding: 10, paddingLeft: 15, paddingRight: 15, borderRadius: 100, width: '50%', alignItems: 'center' }} onPress={() => Linking.openURL(`${result.link}`)}>
              <Text style={{ color:'#546747', fontWeight: 'bold'}}>Select</Text>
            </TouchableOpacity>
          </View>
          <Image style={{width: 200, height: '25%', margin: 0, padding: 0, transform: [{ rotate: '90deg'}], left:-60, top:75 }} source={require('../assets/barcode.png')} />
        </View>
      </View>
    </View>  
  )  
  
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  container: {
    // padding: 20,
    backgroundColor: '#fff',
    overflow: 'hidden' 
  }
})

export default FlightInfo;