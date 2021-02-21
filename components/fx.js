import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
export default class Fx extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Home: 'USD',
      Dest: 'USD',
      Value: 1
    }
  }
  componentDidUpdate(prevProps) {
    if (prevProps.Dest !== this.props.Dest) {
      this.setState({
        Dest: this.props.Dest
      })
    }
  }

  number_two = (e) => {
    this.setState({ Value: e })
  }
  render() {
    return (
      <View>
        <View style={{ alignItems: 'flex-start' }}>
          <TextInput placeholder='1 USD' onChangeText={this.number_two} style={{  width: 100 }} />
          {/* <Text>1  {this.state.Home}</Text> */}
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <CurrencyConverter from={this.state.Home} to={this.state.Dest} value={this.state.Value} />
            <Text>  {this.state.Dest}</Text>
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
    let newTo = this.props.to
    if (prevProps !== this.props) {
      this.setState({
        to: newTo
      });
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