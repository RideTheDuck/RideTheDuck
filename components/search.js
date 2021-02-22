import React, {useState} from 'react';
import { View, TextInput, StyleSheet } from "react-native"
import { Feather } from "@expo/vector-icons"; 
import Icon from 'react-native-vector-icons/FontAwesome';

const search = require('../style/search');

const Search = ({ location, onLocationChange, onLocationSubmit }) => {
  state = {text:""}
  return (
    <View style={search.container}>
     <Icon name="search" style={search.icon} />
      <TextInput
        style={search.input}
        placeholder="Search for destination"
        autoFocus={true}
        value={location}
        onChangeText={text => this.setState({text}),onLocationChange}
        onEndEditing={onLocationSubmit}
      />
    </View>
  );
}

export default Search;