import React, {Component} from 'react'; 
import { View, Text } from 'react-native'; 
import CurrencyConverter from 'react-currency-conv'; 

export default class Fx extends Component {  
    state = {
        Home: 'USD', 
        Dest: 'GBP'
    }

    render() { 

        return ( 
        <View> 
            <Text>From: {this.state.Home}</Text>  
            <Text>To: {this.state.Dest}</Text>
            <CurrencyConverter from={this.state.Home} to={this.state.Dest} value={1}/> 
        </View>
        )
    }
}
