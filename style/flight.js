import React from 'react';
import {
    StyleSheet
} from "react-native"

const flight = StyleSheet.create({
  airline: {
    backgroundColor: '#faab18', 
    padding: 3, 
    fontWeight: 'bold', 
    color:'white'
  },
  airports: {
    padding:20, 
    paddingRight: 0, 
    alignItems: 'center', 
    width: '80%'
  },
  barcode: {
    width: 200, 
    height: '25%', 
    margin: 0, 
    padding: 0, 
    transform: [{ rotate: '90deg'}], 
    left:-60, 
    top:75 
  },
  card: {
    margin: 10,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    }, 
  },
  container: {
    backgroundColor: '#fff',
    overflow: 'hidden' 
  },
  planeIcon: {
    color: '#faab18',
    fontSize: 30, 
  },
  selectButton: {
    width: 200, 
    height: '25%', 
    margin: 0, 
    padding: 0, 
    transform: [{ rotate: '90deg'}], 
    left:-60, 
    top:75 
  },
  touchable: {
    flex: 2,
        width: "100%",
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        backgroundColor: "#faab18",
  }
  
})