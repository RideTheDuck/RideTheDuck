import React, {Component} from 'react';
import {View,TextInput,StyleSheet,SafeAreaView} from 'react-native';

export default class SearchBox extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <TextInput
          placeholder="Search for an address"
          placeholderTextColor="#000"
          style={styles.searchBox}
          onChangeText={(text) => this.searchLocation(text)}
          value={this.state.searchKeyword}
        />
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  searchBox: {
    width: 340,
    height: 50,
    fontSize: 18,
    borderRadius: 8,
    borderColor: '#aaa',
    color: '#000',
    backgroundColor: '#fff',
    borderWidth: 1.5,
    paddingLeft: 15,
  },
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
  },
});