import React, { Component } from 'react';
import { View, StyleSheet, Button, Text, FlatList } from 'react-native';
import axios from 'axios';

import t from 'tcomb-form-native'; // 0.6.9

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

// const options = {
//   fields: {
//     email: {
//       error: 'Without an email address how are you going to reset your password when you forget it?'
//     },
//     password: {
//       error: 'Choose something you use on a dozen other sites or something you won\'t remember'
//     },
//     terms: {
//       label: 'Agree to Terms',
//     },
//   },
//   stylesheet: formStyles,
// };

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
      console.log(res)
      console.log('name')
      console.log(res.data[0].name)
      console.log('timezones')
      console.log(res.data[0].timezones[0])
      console.log("flag")
      console.log(res.data[0].flag)
      console.log("currency")
      console.log(res.data[0].currencies[0].code)
      this.setState({
        // name: res.data[0].name,
        // timezone: res.data[0].timezones[0],
        // flag: '',
        // currency: res.data[0].currencies[0].code,
        searchResults: res.data[0],
        isShowingResults: true
      })
    })
  }
  
  render() {
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
        {this.state.isShowingResults && (
            <FlatList
              data={this.state.searchResults}
              renderItem={item => {
                return (
                    <Text>{item}</Text>
                );
              }}
            />
          )}
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
});