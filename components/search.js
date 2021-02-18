import React from 'react';
import { View, TextInput, StyleSheet } from "react-native"
import { Feather } from "@expo/vector-icons";

const Search = ({ location, onLocationChange, onLocationSubmit }) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', height: 40, borderColor: 'gray', borderWidth: 1, paddingLeft: 10, borderRadius: 5, margin: 10 }}>
      <Feather name='search' style={styles.iconStyle} />
      <TextInput
        style={{ fontSize: 18 }}
        onChangeText={text => { this.setState({ keyword: text }) }}
        returnKeyType="go"
        placeholder="Search for destination"
        // onSubmitEditing={() => this.handleSubmit()}
        value={location}
        onChangeText={onLocationChange}
        onEndEditing={onLocationSubmit}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  iconStyle: {
    fontSize: 20,
    color: "gray",
    alignSelf: "center",
    marginRight: 10
  }
});

export default Search;