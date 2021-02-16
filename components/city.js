import React, { Component } from 'react';
import { View, StyleSheet, Button, Text, Image } from 'react-native';
import axios from 'axios';
import { SvgUri } from 'react-native-svg';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

import t from 'tcomb-form-native'; // 0.6.9
var lat
var lng
var flag
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
    var countryname
    var capital
    var currency
    
    var timezone
    var laguage
    
    this.setState({searchKeyword: cityName})
    axios.get(`https://restcountries.eu/rest/v2/capital/${cityName}`)
    .then(res=> {
      console.log('name')
      console.log(res.data[0].name)
      lat=res.data[0].latlng[0]
      lng = res.data[0].latlng[1]
      console.log('LATITUDE')
      console.log(lat, lng)
      console.log('timezones')
      console.log(res.data[0].timezones[0])
      console.log("flag")
      flag=res.data[0].flag
      console.log("currency")
      console.log(res.data[0].currencies[0].code)

      this.setState({

        searchResults: res.data[0],
        isShowingResults: true
      })

    })
  }
  
  render() {
    const isShowingResults = this.state.isShowingResults
    let timezone;
    let currency;
    let name;
    let language;
    if (isShowingResults) {
      name = <Text>{this.state.searchResults.name}</Text>
      timezone = <Text>{this.state.searchResults.timezones[0]}</Text>
      currency = <Text>{this.state.searchResults.currencies[0].code}</Text>
      language = <Text>{this.state.searchResults.languages[0].name}</Text>
    } else {
      timezone = '',
      currency = '',
      flag = ''
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
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE} 
          initialRegion={{
           latitude: `${lat}`,
            longitude: `${lng}`,
            //  latitudeDelta: 0.04,
            //  longitudeDelta: 0.05,
          }}
        />
        <SvgUri
          width="50%"
          height="50%"
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