import React, { Component } from 'react';
import { View, StyleSheet, Button, Text, Image, Keyboard, TouchableWithoutFeedback, TextInput} from 'react-native';
import axios from 'axios';
// import SvgUri from 'react-native-svg-uri';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import t from 'tcomb-form-native'; // 0.6.9

const Form = t.form.Form;

const City = t.struct({
  city: t.String,
});

const options = {
  auto: 'none',
  fields: {
    city: {
      placeholder: 'Search for destination'
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
    console.log('key pressed')
    // const value = this._form.getValue();
    const cityName = this._form.getValue();
    var countryname
    var capital
    var currency
    var flag
    var timezone
    var laguage
    this.setState({searchKeyword: cityName})
    axios.get(`https://restcountries.eu/rest/v2/capital/${cityName}`)
    .then(res=> {
      console.log('name')
      console.log(res.data[0].name)
      console.log('timezones')
      console.log(res.data[0].timezones[0])
      console.log("flag")
      console.log(res.data[0].flag)
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
          options={options}
          value={this.value}
          onSubmitEditing={console.log('pressed')}
        />
        {/* <Button
          title="Enter"
          onPress={this.handleSubmit}
        /> */}
        <Text>{name}</Text>
        <Text>{timezone}</Text>
        <Text>{currency}</Text>
        <Text>{language}</Text>
        {Keyboard.dismiss()}
        <MapView style={styles.map} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    // marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  map: {
    width: 200,
    height: 200,
  },
});