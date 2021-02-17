import React, {Component} from 'react'; 
import { View, Text, TextInput } from 'react-native'; 
import CurrencyConverter from 'react-currency-conv'; 

export default class Fx extends Component {   

    
        state = {
            Home: 'USD', 
            Dest: 'KRW',  
            Value: 1
        }    
    

    //number = (num) => {
    //    this.setState({ 
    //        Value: num
    //    });
    //} 

   

    render() {  
        console.log(this.state.Value)
        return ( 
        <View> 
            <Text>From: {this.state.Home}</Text> <Text>To: {this.state.Dest}</Text>  
            <Text>Enter Amount:</Text> 
            <TextInput placeholder='£££' onChangeText={(num) => this.setState({Value: num.textContent})} />
            <CurrencyConverter from={this.state.Home} to={this.state.Dest} value={this.state.Value}/>  
        </View>
        )
    }
}

//<Text>From: {this.state.Home}</Text> <TextInput onChangeText={text => onChangeText(text)} value={value.Value} />