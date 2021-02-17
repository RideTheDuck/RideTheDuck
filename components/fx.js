import React, {Component} from 'react'; 
import { View, Text, TextInput } from 'react-native'; 
import CurrencyConverter from 'react-currency-conv'; 

export default class Fx extends Component {   

    constructor(props) { 
        super(props)
        this.state = {
            Home: 'USD', 
            Dest: 'KRW',  
            Value: 1
        }         
    }

    //number = (e) => {
    //    this.setState({ 
    //        Value: parseInt(e)
    //    });
    //} 

    number_two = (e) => {
        this.setState({Value: e})
    }

   

    render() {      
        console.log(typeof (this.state.Value)) 
        console.log(this.state.Value)
        return (   
        <View> 
            <Text>From: {this.state.Home}</Text> 
            <Text>To: {this.state.Dest}</Text>  
            <Text>Enter Amount:</Text> 
            <TextInput placeholder='£££' onChangeText={this.number_two} />  
            <Text>{this.state.Value}</Text>
            <CurrencyConverter from={this.state.Home} to={this.state.Dest} value={this.state.Value}/>   
        </View> 
        
        ) 
    } 
}

//<Text>From: {this.state.Home}</Text> <TextInput onChangeText={text => onChangeText(text)} value={value.Value} /> 

// e => this.setState({Value: parseInt(e)})