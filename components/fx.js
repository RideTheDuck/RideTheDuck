import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

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
      <View style={currency.container}>
        <View style={currency.default}>
          <Icon name="dollar" style={currency.icon} />
          <TextInput placeholder='1 USD' onChangeText={this.number_two} style={{ width: 100 }} />
        </View>
        <Icon name="exchange" style={currency.iconExchange} />
        <View style={currency.exchange}>
          {/* <Text>1  {this.state.Home}</Text> */}
          <Icon name="dollar" style={currency.icon} />
          <CurrencyConverter from={this.state.Home} to={this.state.Dest} value={this.state.Value} style={currency.money}/>
            <Text  style={currency.symbol}> {this.state.Dest}</Text>
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
const currency = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    marginVertical:10
  },
  default: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    height: 30,
    borderColor: 'gray',
    borderWidth: 2,
    paddingHorizontal: 10,
    borderRadius: 100,
    backgroundColor: "white",
    borderColor: "#faab18",
  },
  icon: {
    fontSize: 18,
    color: "#faab18",
    alignSelf: "center",
    marginRight: 10
  },
  iconExchange: {
    fontSize: 30,
    color: "#faab18",
    alignSelf: "center",
    marginHorizontal: 10
  },
  exchange: {
    display: "flex",
    flexDirection: "row",
    alignItems:"center",
    flex:1,
    height: 30,
    borderColor: 'gray',
    borderWidth: 2,
    paddingHorizontal: 10,
    borderRadius: 100,
    backgroundColor: "white",
    borderColor: "#faab18",
  },
  money: {
    fontSize: 15,
    color: "#546747"
  },
  symbol: {
    fontSize: 15,
    color: "#546747",
    fontWeight:"bold"
  }
})