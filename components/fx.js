import React, {Component} from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
export default class Fx extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Home: 'USD',
            Dest: 'KRW',
            Value: 1
        }
    }

    number_two = (e) => {
        this.setState({Value: e})
    }
    render() {
        return (
        <View style={{color: 'lightsteelblue', marginBottom: 20, marginTop: 20}}>
            <View style={{fontSize: 24}}> 

            <TextInput style={{flexDirection: 'row', alignSelf: 'center', justifyContent: 'center', borderWidth: 1.5, width: 100, paddingHorizontal: 10, borderRadius: 5, width: 100, fontSize: 24, alignContent: 'center' }} placeholder='£££' onChangeText={this.number_two} /> 

            <Text style={{color: '#000080', fontWeight: 'bold', fontSize: 24, padding: 10, width: 100, alignSelf: 'center'}}> {this.state.Value} {this.state.Home}</Text> 

            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', fontSize: 26}}> 

            <CurrencyConverter style={{color: '#000080', fontSize: 24}} from={this.state.Home} to={this.state.Dest} value={this.state.Value}/> 

            <Text style={{marginLeft: 10, fontSize: 24, color: 'navy', fontWeight: 'bold'}}>{this.state.Dest}</Text>  

            </View> 

            </View>
        </View>
        )
    }
}




class CurrencyConverter extends React.Component {
  constructor(props) {
    super(props); 
    if (props.from && props.to && props.value) {
      this.state = {
        from: props.from.toUpperCase(),
        to: props.to.toUpperCase(),
        value: props.value,
        date: props.date ? props.date : 'latest',
        convertedValue: null,
        precision: props.precision ? props.precision > 0 ? props.precision : 2 : 2
      };
    } else {
      throw new Error('Enter valid value as props');
    }
  }
  componentDidMount() { 
    const codes = ['CAD', 'HKD', 'ISK', 'PHP', 'DKK', 'HUF', 'CZK', 'AUD', 'RON', 'SEK', 'IDR', 'INR', 'BRL', 'RUB', 'HRK', 'JPY', 'THB', 'CHF', 'SGD', 'PLN', 'BGN', 'TRY', 'CNY', 'NOK', 'NZD', 'ZAR', 'USD', 'MXN', 'ILS', 'GBP', 'KRW', 'MYR', 'EUR'];
    if (!(codes.includes(this.state.from) && codes.includes(this.state.to))) {
      throw new Error(`Country code is not supprted, supported country codes are: ${codes}`);
    } else if (typeof this.state.value !== "number") {
      throw new Error(`Input value of exchange is not of type number`);
    } else {
      fetch(`https://api.exchangeratesapi.io/${this.state.date}?base=${this.state.from}`, {
        type: 'GET'
      }).then(data => data.json()).then(res => {
        if (res.error) {
          throw new Error(res.error);
        } else {
          let value = this.state.value * res.rates[this.state.to];
          this.setState({
            convertedValue: value.toFixed(this.state.precision)
          });
        }
      }).catch(err => {
        throw new Error(err);
      });
    }
  } 
  componentDidUpdate(prevProps) { 
      if (prevProps.value !== this.props.value) {
      fetch(`https://api.exchangeratesapi.io/${this.state.date}?base=${this.state.from}`, {
       type: 'GET'  
      }).then(data => data.json()).then(res => {  
        let value = this.props.value * res.rates[this.state.to]; 
        this.state.value = parseInt(this.props.value)
        this.setState({
        convertedValue: value.toFixed(this.state.precision) 
      }); 
        if (res.error) {
          throw new Error(res.error);
        } else {
          let value = this.props.value * res.rates[this.state.to];
          this.setState({
            convertedValue: value.toFixed(this.state.precision)
          });
        }
      }).catch(err => {
        throw new Error(err);
       });
    } 
    }
  render() {
    return <Text>{this.state.convertedValue}</Text>
  }
}