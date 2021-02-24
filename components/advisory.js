import React, { Component } from 'react'; 
import { Text } from 'react-native'; 

export default class Advisory extends Component {
    
    info() {
        fetch(`https://www.travel-advisory.info/api?countrycode=${num}/score` 
        ) 
        .then(res => res.json()) 
        .then(json => {
            this.setState({
            advisoryState: json.data.AU.advisory.score 
            })
        })
    } 

    render() {
        return (
            <Text></Text>
        )
    }
} 

//{this.state.advisoryState}