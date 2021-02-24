import React, { Component } from 'react'; 
import { Text } from 'react-native'; 
const num = "AU"

export default class Advisory extends Component {
    info() {
        fetch(`https://www.travel-advisory.info/api?countrycode=${num}/score` 
        ) 
        .then(res => res.json()) 
        .then(json => {
            this.setState({
            advisoryState: json.data.AU.advisory.message 
            })
            console.log(data)
        })
    } 

    render() {
        return (
            <Text></Text>
        )
    }
} 

//{this.state.advisoryState}