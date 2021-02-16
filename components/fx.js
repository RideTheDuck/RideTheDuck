import React, {Component} from 'react'; 
import { View, Text, TextInput } from 'react-native'; 
import CurrencyConverter from 'react-currency-conv'; 

export default class Fx extends Component {  
    state = {
        Home: 'USD', 
        Dest: 'KRW', 
        Value: 1
    } 

    value = (value) => {
        this.setState({
            Home: 'USD', 
            Dest: 'KRW', 
            Value: value
        });
    }

    render() { 
        return ( 
        <View> 
            <Text>From: {this.state.Home}</Text> <Text>To: {this.state.Dest}</Text> 
            <CurrencyConverter from={this.state.Home} to={this.state.Dest} value={this.state.Value}/> 
        </View>
        )
    }
}

//<Text>From: {this.state.Home}</Text> <TextInput onChangeText={text => onChangeText(text)} value={value.Value} />