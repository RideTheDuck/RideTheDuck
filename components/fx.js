import React, {Component} from 'react'; 
import { View } from 'react-native'; 
import CurrencyConverter from 'react-currency-conv'; 

export default class Fx extends Component {
    render() {
        return ( 
        <View>
            <CurrencyConverter from={'USD'} to={'CAD'} value={1}/> 
        </View>
        )
    }
}
