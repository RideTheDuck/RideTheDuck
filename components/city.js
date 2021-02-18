import React, { Component, useState } from 'react';
import { View, StyleSheet, Button, Text, Image, Keyboard, TouchableWithoutFeedback, TextInput } from 'react-native';
import axios from 'axios';
import { SvgUri } from 'react-native-svg';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Feather } from "@expo/vector-icons";
import t from 'tcomb-form-native'; // 0.6.9
import Icon from 'react-native-vector-icons/FontAwesome';
import Fx from './fx'
import CurrencyFormat from 'react-currency-format';
import yelp from "../api/yelp"

var flag;
let lttd;
let lng;
let timezone;
let currency;
let name;
let language;
let capital;
// const [term,setTerm] = useState('')
// const [results, setResults] = useState([])
const Form = t.form.Form;

const CitySearch = t.struct({
  city: t.String,
});

const options = {
  auto: 'none',
  fields: {
    city: {
      placeholder: 'Search for destination',
    }
  }
}

export default class City extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      keyword: '',
      searchResults: [],
      isShowingResults: false,
    }
  }
  handleSubmit = () => {
    // const value = this._form.getValue();
    // const cityName = value.city
    const cityName = this.state.keyword;
    // this.setState({searchKeyword: cityName})
    axios.get(`https://restcountries.eu/rest/v2/capital/${cityName}`)
    .then(res => {
      name = res.data[0].name
      timezone = res.data[0].timezones[0]
      flag = res.data[0].flag
      currency = res.data[0].currencies[0].code
      language = res.data[0].languages[0].name
      capital = res.data[0].capital
      this.setState({
        searchResults: res.data[0],
        isShowingResults: true
      })
    })
    
    
  }
  searchApi = async () => {
    const response = await yelp.get("/search", {
      params: {
        limit: 10,
        term,
        location:"london"
      }
    });
    setResults(response.data.businesses)
    console.log(setResults)
  };

  render() {
    
    const isShowingResults = this.state.isShowingResults
    if (isShowingResults) {
      // capital = <Text>{this.state.searchResults.capital}</Text>
      // name = <Text>{this.state.searchResults.name}</Text>
      // timezone = <Text>{this.state.searchResults.timezones[0]}</Text>
      // currency = <Text>{this.state.searchResults.currencies[0].code}</Text>
      // language = <Text>{this.state.searchResults.languages[0].name}</Text>
    } else {
      timezone = ''
      currency = ''
      name = ''
      language = ''
      capital = ''
    }
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: "#F0EEEE",borderColor: 'gray', borderWidth: 0,borderRadius: 10  }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', height: 40, paddingLeft: 10, flex: 1, }}>
            <Feather name='search' style={styles.iconStyle} />
            <TextInput
              style={{ fontSize: 18 }}
              onChangeText={text => { this.setState({ keyword: text }) }}
              returnKeyType="go"
              placeholder="Search for destination"
              onSubmitEditing={() => this.handleSubmit()}
            // term={term}
            // onTermChange={setTerm}
            onTermSubmit={()=>this.searchApi()}
            />
          </View>
          {/* <Icon.Button
            name="bookmark"
            color='#BF0000'
            size='35'
            backgroundColor='#fff'
          // borderWidth='1'
          // borderColor='black'
          ></Icon.Button> */}
        </View>
        {/* <Button
          title="Enter"
          onPress={this.handleSubmit}
        /> */}
        <Fx />
        <View style={{ flexDirection: 'row' }}>
          <MapView
            style={styles.map}
            provider={PROVIDER_GOOGLE}
            initialRegion={{
              latitude: `${lttd}`,
              longitude: `${lng}`,
              latitudeDelta: 20,
              longitudeDelta: 30,
            }}
          />
          <SvgUri
            width="10%"
            height="10%"
            uri={`${flag}`}
          />
          <View style={{ width: 170, padding: 10 }}>
            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{capital}</Text>
            <Text>{capital}</Text>
            <Text>{name}</Text>
            <Text>{timezone}</Text>
            {/* <Text>{currency}</Text> */}
            <Text>{language}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    // marginTop: 50,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 15,
    flex: 1.5,

  },
  map: {
    width: 180,
    height: 150,
  },
  iconStyle: {
    fontSize: 20,
    color: "gray",
    alignSelf: "center",
    marginRight: 10
  }
});


