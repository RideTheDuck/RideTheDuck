import React, { Component } from 'react';
import { View, Text, TextInput, Picker, Forms, Button } from 'react-native';

export default class CurrencyConverter extends Component {
  constructor() {
    super();
    
    this.state = {
      baseCurrency:'GBP',
      convertToCurrency:'USD',
      baseAmount: 100,
      rates: [],
      currencies: []
    };
    
    this.changeBaseCurrency = this.changeBaseCurrency.bind(this);
    this.changeConvertToCurrency = this.changeConvertToCurrency.bind(this);
    this.changeBaseAmount = this.changeBaseAmount.bind(this);
    this.getConvertedCurrency = this.getConvertedCurrency.bind(this);
    this.callAPI = this.callAPI.bind(this);
  }
  
  componentDidMount() {
   this.callAPI(this.state.baseCurrency)
  }
  
  changeBaseCurrency(e) {
    this.setState({ baseCurrency: e.target.value});
    this.callAPI(e.target.value)
    
  }
  
 callAPI(base) {
   const api = `https://api.exchangeratesapi.io/latest?base=${base}`;
    
    fetch(api)
     .then(results => {
        return results.json();
    }).then(data => this.setState({
      rates: data['rates'],
      currencies: Object.keys(data['rates']).sort()
    }));
   
 } 
  
  
  changeConvertToCurrency(e) {
    this.setState({
      convertToCurrency: e.target.value
    });
  }
  
  changeBaseAmount(e) {
   this.setState({
     baseAmount: e.target.value
   });
  }
  
  getConvertedCurrency(baseAmount,convertToCurrency,rates) {
      return Number.parseFloat(baseAmount * rates[convertToCurrency]).toFixed(3);
  }
  
  render() {
    const {currencies,rates,baseCurrency,baseAmount,convertToCurrency} = this.state;
    
    const currencyChoice = currencies.map(currency =>
      <Picker.Item key={currency} value={currency}> {currency} </Picker.Item>      
    );
                                          
    const result = this.getConvertedCurrency(baseAmount, convertToCurrency, rates);
    
    
    return(
      <View className="form-container">
        <Forms className='ui mini F'>
        
         <Text h3>Convert from: {baseCurrency}</Text>
          <Picker value={baseCurrency} onChange={this.changeBaseCurrency}>
            {currencyChoice}
            <Picker.Item>{baseCurrency}</Picker.Item>
          </Picker>
        
          <Text h3>Convert to: {convertToCurrency}</Text>
          <Picker value={convertToCurrency} onChange={this.changeConvertToCurrency}>
            {currencyChoice}
          </Picker>
        
         <Text h3>Amount:</Text>
           <TextInput 
                  id='base-amount' 
                  defaultValue={baseAmount} 
                  onChange={this.changeBaseAmount}>
          </TextInput>                             
       </Forms>                       
       <Text h2 id='result-text'>{baseAmount} {baseCurrency} is equal to {result} {convertToCurrency}</Text>
     </View>
    );
  }
}


// ReactDOM.render(
//   <App />,
//   document.getElementById('app')
// );