import React, { Component } from 'react';
import { View, StyleSheet, Button, Text, Image, Keyboard, TouchableWithoutFeedback, TextInput } from 'react-native';
import axios from 'axios';
import { SvgUri } from 'react-native-svg';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Feather } from "@expo/vector-icons";
// import t from 'tcomb-form-native'; // 0.6.9
import Icon from 'react-native-vector-icons/FontAwesome';
import Fx from './fx'
// import CurrencyFormat from 'react-currency-format';


var flag;
let lttd;
let lng;
let timezone;
let newCurrency;
let name;
let language;
let capital;

export default class City extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: '',
      searchResults: [],
      currency: 'USD',
      isShowingResults: false,
    }
  }
  handleSubmit = () => {
    const cityName = this.state.keyword;


    axios.get(`https://restcountries.eu/rest/v2/capital/${cityName}`)
      .then(res => {
        name = res.data[0].name
        timezone = res.data[0].timezones[0]
        flag = res.data[0].flag
        newCurrency = res.data[0].currencies[0].code
        language = res.data[0].languages[0].name
        capital = res.data[0].capital
        this.setState({
          searchResults: res.data[0],
          isShowingResults: true,
        })
        this.changeCurrency(newCurrency)
        console.log('city after')
        console.log(this.state.currency)
      })
  }

  changeCurrency = (newCurrency) => {
    this.setState({
      currency: newCurrency
    })
  }

  render() {
    const isShowingResults = this.state.isShowingResults
    if (isShowingResults) {
    } else {
      timezone = ''
      name = ''
      language = ''
      capital = ''
    }
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: "#F0EEEE", }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', height: 40, borderColor: 'gray', borderWidth: 1, paddingLeft: 10, flex: 1, borderRadius: 5 }}>
            <Feather name='search' style={styles.iconStyle} />
            <TextInput
              style={{ fontSize: 18 }}
              onChangeText={text => { this.setState({ keyword: text }) }}
              returnKeyType="go"
              placeholder="Search for destination"
              onSubmitEditing={() => this.handleSubmit()}
            // term={term}
            // onTermChange={setTerm}
            // onTermSubmit={searchApi}
            />
          </View>
          {/* <Icon.Button
              name="bookmark"
              color='#BF0000'
              //size='35'
              backgroundColor='#fff'
            // borderWidth='1'
            // borderColor='black'
            ></Icon.Button> */}
        </View>

        <Fx Dest={this.state.currency} />
        <View style={{ flexDirection: 'row', flex: 1 }}>
          <View style={{flex: 1}}>
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
          </View>
          <View style={{ flexDirection: 'column', flex: 1, padding: 10 }}>
            <SvgUri
              style={{ flexDirection: 'column', alignSelf: "left" }}
              width="50%"
              height="20%"
              uri={`${flag}`}
            />
            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{capital}</Text>
            <Text>{name}</Text>
            <Text>{timezone}</Text>
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
    width: "100%",
    height: 150,
  },
  iconStyle: {
    fontSize: 20,
    color: "gray",
    alignSelf: "center",
    marginRight: 10
  }
});