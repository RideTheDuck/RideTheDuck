import React from 'react';
import { View, StyleSheet, Image, Text } from "react-native"
import BouncingPreloader from 'react-native-bouncing-preloader';
const Splash = ({navigation}) => {
  return (
    <View style={splash.container}>
        <BouncingPreloader icons={[require('../assets/rubber-duck.png')]} speed={1000} />
        <Text style={splash.text}>Ride the Duck</Text>
    </View> 
  )
};

const splash = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
},
logo: {
    height: 150,
    width: 150,
    resizeMode: 'cover',
},
text: {
    // fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 28,
    marginBottom: 10,
    color: "#546747",
    fontWeight: 'bold',
    marginBottom: 50,
},
})

export default Splash;