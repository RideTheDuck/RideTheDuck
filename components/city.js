import React, { Component } from 'react';
import { View, StyleSheet, Button, Text, Image } from 'react-native';
import axios from 'axios';
import { SvgUri } from 'react-native-svg';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

import t from 'tcomb-form-native'; // 0.6.9

var flag;
let lttd;
let lng;
let timezone;
let currency;
let name;
let language;
let capital;
const Form = t.form.Form;

const City = t.struct({
  city: t.String,
  // username: t.maybe(t.String),
  // password: t.String,
  // terms: t.Boolean
});

const formStyles = {
  ...Form.stylesheet,
  formGroup: {
    normal: {
      marginBottom: 10
    },
  },
  controlLabel: {
    normal: {
      color: 'blue',
      fontSize: 18,
      marginBottom: 7,
      fontWeight: '600'
    },
    // the style applied when a validation error occours
    error: {
      color: 'red',
      fontSize: 18,
      marginBottom: 7,
      fontWeight: '600'
    }
  }
}


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults:[],
      isShowingResults: false,
    }
  }
  handleSubmit = () => {
    const value = this._form.getValue();
    const cityName = value.city
    this.setState({searchKeyword: cityName})
    axios.get(`https://restcountries.eu/rest/v2/capital/${cityName}`)
    .then(res=> {
      name=res.data[0].name
      timezone = res.data[0].timezones[0]
      flag=res.data[0].flag
      currency = res.data[0].currencies[0].code
      language = res.data[0].languages[0].name
      capital = res.data[0].capital
      this.setState({
        searchResults: res.data[0],
        isShowingResults: true
      })

    })
  }
  
  render() {
    const isShowingResults = this.state.isShowingResults
    if (isShowingResults) {
      // name = <Text>{this.state.searchResults.name}</Text>
      // timezone = <Text>{this.state.searchResults.timezones[0]}</Text>
      // currency = <Text>{this.state.searchResults.currencies[0].code}</Text>
      // language = <Text>{this.state.searchResults.languages[0].name}</Text>
      // lttd = `${this.state.searchResults.latlng[0]}`
      // lng = `${this.state.searchResults.latlng[1]}`
      // console.log(lttd, lng)
    } else {
      timezone = '',
      currency = '',
      flag = ''
      lttd = 0
      lng =0
    }
    return (
      <View style={styles.container}>
        <Form 
          ref={c => this._form = c}
          type={City} 
          // options={options}
        />
        <Button
          title="Enter"
          onPress={this.handleSubmit}
        />
        <Text>{name}</Text>
        <Text>{timezone}</Text>
        <Text>{currency}</Text>
        <Text>{language}</Text>
        <Text>
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE} 
          initialRegion={{
            latitude:`${lttd}`,
            longitude: `${lng}`,
            latitudeDelta:20,
            longitudeDelta:30,
          }}
          />
          </Text>
        <SvgUri
          width="10%"
          height="10%"
          uri={`${flag}`}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  map: {
    width: 200,
    height: 200,
  },
});